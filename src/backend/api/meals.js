const express = require("express");
const Knex = require("knex");
const app = require("../app");
const { limit, sum } = require("../database");
const router = express.Router();
const knex = require("../database");
// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
router.use(express.json());

router.get("/:id", async (request, response) => {
  try {
    const inputNumber = Number(request.params.id);
    if (isNaN(inputNumber)) {
      response.send("not a valid id");
    } else {
      const specificMeal = await knex("meal").where("id", request.params.id);
      response.json(specificMeal);
    }
  } catch (error) {
    throw error;
  }
});
router.post("/", async (request, response) => {
  try {
    const updateMeal = await knex("meal").insert({
      title: request.body.title,
      description: request.body.description,
      location: request.body.location,
      when: request.body.when,
      max_reservations: request.body.max_reservations,
      price: request.body.price,
      created_date: request.body.created_date,
    });
    response.json(updateMeal);
  } catch (error) {
    throw error;
  }
});

//update the meal by id
router.put("/:id", async (request, response) => {
  try {
    const inputId = Number(request.params.id);
    const meals = knex("meal");
    const updatedMeal = meals.where({ id: inputId }).update(request.body);
    const updatedId = await updatedMeal;
    response.json(updatedId);
  } catch (error) {
    throw error;
  }
});
//const maxIdMeal = meals.map((meal) => meal.id);

//get the max of the array
//const largenum = Math.max(...maxIdMeal);
// if (isNaN(inputId)) {
//   response.send("id is not a number");
// } else
//if (inputId > largenum) {
// response.send(`the largest id is : ${largenum}`);
// } else {

//}

//delete a meal by id
router.delete("/:id", async (request, response) => {
  try {
    const meals = await knex("meal").select("*");
    const inputId = Number(request.params.id);
    const maxIdMeal = meals.map((meal) => meal.id);
    const largenum = Math.max(...maxIdMeal);
    if (isNaN(inputId)) {
      response.send("id is not a number");
    } else if (inputId > largenum) {
      response.send(`the largest id is : ${largenum}`);
    } else {
      let mealsTable = knex("meal");
      const deletedMeal = await mealsTable
        .where({ id: request.params.id })
        .delete();
      //console.log(deletedMeal);
      response.json(deletedMeal);
    }
  } catch (error) {
    throw error;
  }
});

//Get meals that has a price smaller than maxPrice
router.get("/", async (request, response) => {
  let datageneral = await knex("meal");
  if ("maxPrice" in request.query) {
    const maxPrice = Number(request.query.maxPrice);
    if (isNaN(maxPrice)) {
      return response.send("not a number");
    } else {
      datageneral = datageneral.where("meal.price", "<=", maxPrice);
    }
  }

  //Get meals that still has available reservations
  if ("availableReservation" in request.query) {
    datageneral = datageneral
      //const availableReservations = await knex("meal")
      .join("reservation", "meal.id", "=", "reservation.meal_id")
      .select(
        "meal.id",
        "title",
        "max_reservations",
        knex.raw("SUM(number_of_guests) AS total_guests"),
        knex.raw(
          '(max_reservations-SUM(number_of_guests)) AS "Available Reservation"'
        )
      )
      .where("max_reservations", ">", "number_of_guests")
      .groupBy("meal_id")
      .having(knex.raw("(max_reservations-SUM(number_of_guests)) > 0"));
  }
  // Get meals that partially match a title
  if ("title" in request.query) {
    const title = request.query.title.toLowerCase();
    if (!isNaN(request.query.title)) {
      return response.send("not a valid title");
    } else {
      datageneral = datageneral.where("meal.title", "like", "%" + title + "%");
    }
  }

  //Get meals that has been created after the date

  if ("createdAfter" in request.query) {
    const createdAfter = new Date(request.query.createdAfter);
    datageneral = datageneral.where("meal.created_date", "<", createdAfter);
  }
  if ("limit" in request.query) {
    const getLimitMeal = Number(request.query.limit);
    if (isNaN(request.query.limit)) {
      return response.send("not a number");
    } else {
      datageneral = datageneral.limit(getLimitMeal);
    }
  }
  try {
    const mealsResult = await datageneral;
    if (mealsResult.lenght === 0) {
      response.json("no meals found");
    } else {
      response.json(mealsResult);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
