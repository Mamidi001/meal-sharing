const express = require("express");
const router = express.Router();
const knex = require("../database");

//to get all reservations
router.get("/", async (request, response) => {
  try {
    const allReservations = await knex("reservation");
    response.json(allReservations);
  } catch (error) {
    throw error;
  }
});

//add a new reservation
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

//get a reservation by id
router.get("/:id", async (request, response) => {
  try {
    const specificReservation = await knex("reservation").where(
      "id",
      request.params.id
    );
    response.json(specificReservation);
  } catch (error) {
    throw error;
  }
});

//update by id
router.put("/:id", async (request, response) => {
  try {
    const updatedReserv = await knex("reservation")
      .where("id", request.params.id)
      .update(request.body);
    response.json(updatedReserv);
  } catch (error) {
    throw error;
  }
});

//delete by id
router.delete("/:id", async (request, response) => {
  try {
    const deletedReserv = await knex("reservation")
      .where("id", request.params.id)
      .delete(request.body);
    response.json(deletedReserv);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
