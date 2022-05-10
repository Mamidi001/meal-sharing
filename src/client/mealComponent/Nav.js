import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Nav() {
  const url = `http://localhost:3000/api/meals`;
  async function getMealData() {
    const result = await Axios.get(url);
    console.log(result.data);
  }
  return (
    <nav>
      <h3 className="logo">Logo</h3>
      <div className="search-component"></div>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/reservations">
          <li>Reservations</li>
        </Link>
        <Link to="/meals">
          <li>Meals</li>
        </Link>
        <Link to="/review">
          <li>Review</li>
        </Link>
        <Link exact to={`addmeal/`}>
          <button className="Add-meal">Add Meal</button>
        </Link>
        {/* <Link to="/addmeal">
          <li>Add Meal</li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default Nav;
