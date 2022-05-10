const express = require("express");
//const { max } = require("../database");
const { request } = require("express");
const router = express.Router();
const knex = require("../database");
// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
router.use(express.json());

router.get("/", async (request, response) => {
  try {
    const allReservations = await knex("reservation");
    response.json(allReservations);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    // const inputId = Number(request.params.id);
    // if (isNaN(inputId)) {
    //   response.send("not a valid id");
    // } else {
    const specificId = await knex("reservation").where({
      id: request.params.id,
    });
    response.json(specificId);
    //}
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    const updateReservation = await knex("reservation").insert({
      number_of_guests: request.body.number_of_guests,
      created_date: request.body.created_date,
      phone_number: request.body.phone_number,
      contact_name: request.body.contact_name,
      email: request.body.email,
      meal_id: request.body.meal_id,
    });
    response.json(updateReservation);
  } catch (error) {
    throw error;
  }
});

// get a reservation by id
router.put("/:id", async (request, response) => {
  try {
    //const inputId = Number(request.params.id);
    const specificReservation = knex("reservation")
      .where({ id: Number(request.params.id) })
      .update(request.body);
    const updateId = await specificReservation;
    response.json(updateId);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const allReservations = await knex("reservation").select("*");
    const inputId = Number(request.params.id);
    const newReservations = allReservations.map(
      (allReservation) => allReservation.id
    );
    const maxIdReservation = Math.max(...newReservations);
    if (isNaN(inputId)) {
      response.send("id is not valid");
    } else if (inputId > maxIdReservation) {
      response.send(`the largest id is :${maxIdReservation}`);
    } else {
      const deleteReservation = await knex("reservation")
        .where({ id: inputId })
        .delete();
      response.json(deleteReservation);
    }
  } catch (error) {
    throw error;
  }
});

// //to get all reservations
// router.get("/", async (request, response) => {
//   try {
//     const allReservations = await knex("reservation").select("*");
//     response.json(allReservations);
//   } catch (error) {
//     throw error;
//   }
// });

// //add a new reservation

// //get a reservation by id
// // router.put("/:id", async (request, response) => {
// //   try {
// //     const allReservations = await knex("reservation").select("*");
// //     const specificReservation = allReservations.where("id", request.params.id);
// //     response.json(specificReservation);
// //   } catch (error) {
// //     throw error;
// //   }
// // });

// //update by id
// router.put("/:id", async (request, response) => {
//   try {
//     const allReservations = await knex("reservation").select("*");
//     const inputId = Number(request.params.id);
//     const newReservations = allReservations.map(
//       (allReservation) => allReservation.id
//     );
//     const maxIdReservation = Math.max(...newReservations);
//     if (isNaN(inputId)) {
//       response.send("id is not valid");
//     } else if (inputId > maxIdReservation) {
//       response.send(`the largest id is :${maxIdReservation}`);
//     } else {
//       const specificReservation = allReservations
//         .where({ id: request.params.id })
//         .update({
//           number_of_guests: request.body.number_of_guests,
//           created_date: request.body.created_date,
//           phone_number: request.body.phone_number,
//           contact_name: request.body.contact_name,
//           email: request.body.email,
//           meal_id: request.body.meal_id,
//         });
//       response.json(specificReservation);
//     }
//   } catch (error) {
//     throw error;
//   }
// });

// //delete by id
// router.delete("/:id", async (request, response) => {
//   try {
//     const allReservations = await knex("reservation").select("*");
//     const inputId = Number(request.params.id);
//     const newReservations = allReservations.map(
//       (allReservation) => allReservation.id
//     );
//     const maxIdReservation = Math.max(...newReservations);
//     if (isNaN(id)) {
//       response.send("id is not valid");
//     } else if (inputId > maxIdReservation) {
//       response.send(`the largest id is :${maxIdReservation}`);
//     } else {
//       const specificReservation = allReservations
//         .where({ id: inputId })
//         .delete();
//       response.json(specificReservation);
//     }
//   } catch (error) {
//     throw error;
//   }
// });

module.exports = router;
