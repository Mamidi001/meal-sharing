import React, { useState, useEffect } from "react";
import "./Meal.css";

//import specificId from "./SpecificId";
function Meals() {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetchMeals();
  }, []);
  const fetchMeals = async () => {
    const data = await fetch(`http://localhost:3000/api/meals`);
    const fetchResult = await data.json();
    setMeal(fetchResult);
  };
  const meals = meal.map((meal) => (
    <div className="mealDeco">
      <img
        className="meal-img"
        src="https://static.toiimg.com/photo/76942221.cms"
      />
      <Link exact to={`/meals/${meal.id}`}>
        <h2>{meal.title}</h2>
        <p>Price : {meal.price} dkk</p>
      </Link>
    </div>
  ));

  return (
    <div>
      <h2>{meals}</h2>
    </div>
  );
}
export default Meals;
