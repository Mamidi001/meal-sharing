import React, { useState, useEffect } from "react";
import "./Meal.css";
import { Link } from "react-router-dom";

function Meals() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetchMeals();
  }, []);
  const [meal, setMeal] = useState([]);
  const fetchMeals = async () => {
    const data = await fetch(`http://localhost:3000/api/meals`);
    const fetchResult = await data.json();
    setMeal(fetchResult);
  };
  useEffect(() => {
    fetchSearchMeals();
  }, [query]);
  const fetchSearchMeals = async () => {
    const searchFetchData = await fetch(
      `http://localhost:3000/api/meals?title=${query}`
    );
    const fetchSearchResult = await searchFetchData.json();
    setMeal(fetchSearchResult);
  };

  const meals = meal.map((items, index) => {
    return (
      <div className="meal-deco" key={index}>
        <div>
          <Link exact to={`meals/${items.id}`}>
            {" "}
            <h2>{items.title}</h2>
            <h2>Id: {items.id}</h2>
            <img
              className="meal-img"
              src="https://static.toiimg.com/photo/76942221.cms"
            />
            <h4> {items.description} </h4>
            <p>Price : {items.price} dkk</p>
          </Link>
          <Link exact to={`addreservation/${items.id}`}>
            <button className="Add-review">Add Reservation</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="all-meals-display">
      <h1 className="meal-menu">Meals Menu</h1>
      <input
        type="text"
        className="search-input"
        placeholder="search-meal"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="all-meals">{meals}</div>
    </div>
  );
}

export default Meals;
