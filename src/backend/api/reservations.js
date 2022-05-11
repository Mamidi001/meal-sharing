const express = require("express");
//const { max } = require("../database");
const { request } = require("express");
const router = express.Router();
const knex = require("../database");

router.use(express.urlencoded({ extended: true }));

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
    const specificId = await knex("reservation").where({
      id: request.params.id,
    });
    response.json(specificId);
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

module.exports = router;
