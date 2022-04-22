const express = require("express");
const router = express.Router();
const knex = require("../database");

//to get all reviews
router.get("/", async (request, response) => {
  try {
    const allReviews = await knex("review");
    response.json(allReviews);
  } catch (error) {
    throw error;
  }
});

//add a new review
router.post("/", async (request, response) => {
  try {
    const updateReview = await knex("review").insert({
      title: request.body.title,
      description: request.body.description,
      stars: request.body.stars,
      meal_id: request.body.meal_id,
      created_date: request.body.created_date,
    });
    response.json(updateReview);
  } catch (error) {
    throw error;
  }
});

//get a review by id
router.get("/:id", async (request, response) => {
  try {
    const specificReview = await knex("review").where("id", request.params.id);
    response.json(specificReview);
  } catch (error) {
    throw error;
  }
});

//update a review by id
router.put("/:id", async (request, response) => {
  try {
    const description = await knex("review")
      .where("id", request.params.id)
      .update(request.body);
    response.json(description);
  } catch (error) {
    throw error;
  }
});

// delete review by id
router.delete("/:id", async (request, response) => {
  try {
    const description = await knex("review")
      .where("id", request.params.id)
      .delete(request.body);
    response.json(description);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
