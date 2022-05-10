const express = require("express");
const { max } = require("../database");
const router = express.Router();
const knex = require("../database");
// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
router.use(express.json());

//to get all reviews
router.get("/", async (request, response) => {
  try {
    const allReviews = await knex("review").select("*");
    response.json(allReviews);
  } catch (error) {
    throw error;
  }
});

//add a new review
router.post("/", async (request, response) => {
  try {
    const allReviews = await knex("review").select("*");
    const updateReview = allReviews.insert({
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
    const allReviews = await knex("review").select("*");
    const inputId = Number(request.params.id);
    const newArray = allReviews.map((allReview) => allReview.id);
    const maxId = Math.max(...newArray);
    if (isNaN(inputId)) {
      response.send("not a number");
    } else if (inputId > maxId) {
      response.send(`the max id is : ${maxId}`);
    } else {
      const specificReview = allReviews.where("id", inputId);
      response.json(specificReview);
    }
  } catch (error) {
    throw error;
  }
});

//update a review by id
router.put("/:id", async (request, response) => {
  try {
    const allReviews = await knex("review").select("*");
    const inputId = Number(request.params.id);
    const newArray = allReviews.map((allReview) => allReview.id);
    const maxId = Math.max(...newArray);
    if (isNaN(inputId)) {
      response.send("not a number");
    } else if (inputId > maxId) {
      response.send(`the max id is : ${maxId}`);
    } else {
      const specificReview = allReviews
        .where({ id: request.params.id })
        .update({
          title: request.body.title,
          description: request.body.description,
          stars: request.body.stars,
          meal_id: request.body.meal_id,
          created_date: request.body.created_date,
        });
      response.json(specificReview);
    }
  } catch (error) {
    throw error;
  }
});

// delete review by id
router.delete("/:id", async (request, response) => {
  try {
    const allReviews = await knex("review").select("*");
    const inputId = Number(request.params.id);
    const newArray = allReviews.map((allReview) => allReview.id);
    const maxId = Math.max(...newArray);
    if (isNaN(inputId)) {
      response.send("not a number");
    } else if (inputId > maxId) {
      response.send(`the max id is : ${maxId}`);
    } else {
      const specificReview = allReviews.where({ id: inputId }).delete();
      response.json(specificReview);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
