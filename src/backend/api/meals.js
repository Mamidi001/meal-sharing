const express = require("express");
const app = require("../app");
//const { max } = require("../database");
const router = express.Router();
const knex = require("../database");

//Get meals that has a price smaller than maxPrice
router.get("/", async (request, response) => {
  console.log("akjdskank");
  if ("maxPrice" in request.query) {
    const dataTable = await knex("meal").where(
      "price",
      "<",
      Number(request.query.maxPrice)
    );
    return response.json(dataTable);
  }

  //Get meals that still has available reservations
  if ("availableReservation" in request.query) {
    const availableReservations = await knex("meal")
      .join("reservation", "reservation.meal_id", "=", "meal.id")
      .where("max_reservations", ">", "number_of_guests");
    response.json(availableReservations);
  }
  // Get meals that partially match a title
  if ("title" in request.query) {
    const getTitle = await knex("meal").where("title", "like", "%pasta%");
    response.json(getTitle);
  }
  //Get meals that has been created after the date
  // if (createdAfter in request.query) {
  //   const getCreatedDate = await knex("meal").where(function () {
  //     this.where("created_date", ">", "2022-01-20");
  //   });
  //   response.json(getCreatedDate);
  // }
  if ("createdAfter" in request.query) {
    const createdAfter = await knex("meal").where(
      "created_date",
      ">",
      "2022-01-20" //we can also give request.query.createdAfter
    );

    if (createdAfter.length === 0) {
      return response
        .status(404)
        .json({ Error: "No meal found created this date" });
    }
    return response.json(createdAfter);
  }
  // Only specific number of meals with a specific max price
  if ("limit" in request.query && "maxPrice" in request.query) {
    const getLimit = knex("meal")
      .select("maxPrice")
      .where({
        price: 100,
        max_reservations: 25,
      }) //we can write like...it read the url value"price", "<", request.query.maxPrice
      .limit(request.query.limit);
  }
  //Only specific number of meals
  if ("limit" in request.query) {
    const getLimitMeal = await knex("meal").limit(request.query.limit);
    response.json(getLimitMeal);
  }
});

//returns meal by id
router.get("/", async (request, response) => {
  try {
    const allMeals = await knex("meal");
    response.json(allMeals);
  } catch (error) {
    throw error;
  }
});

//add a new meal
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

//returns by id
router.get("/:id", async (request, response) => {
  try {
    const specificMeal = await knex("meal").where("id", request.params.id);
    response.json(specificMeal);
  } catch (error) {
    throw error;
  }
});

//update the meal by id
router.put("/:id", async (request, response) => {
  try {
    const updatedMeal = await knex("meal")
      .where("id", request.params.id)
      .update(request.body);
    response.json(updatedMeal);
  } catch (error) {
    throw error;
  }
});

//delete a meal by id
router.delete("/:id", async (request, response) => {
  try {
    const deletedMeal = await knex("meal")
      .where("id", request.params.id)
      .delete(request.body);
    response.json(deletedMeal);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
