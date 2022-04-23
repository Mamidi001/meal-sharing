//import { response } from "express";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Nav() {
  const navStyle = {
    color: "black",
  };
  // const [timeoutId, setTimeoutId] = useState();
  // const fetchMealData = async (searchString) => {
  //   const response = await Axios.get(`http://localhost:3000/api/reservations`);
  // };

  // const onTextChange = (event) => {
  //   clearTimeout(timeoutId);
  //   const timeOut = setTimeout(() => fetchMealData(event.target.value), 500);
  //   setTimeoutId(timeOut);
  // };
  return (
    <nav>
      <h3>Logo</h3>
      <div className="search-component">
        <input
          className="search-input"
          placeholder="search-meal"
          //onChange={onTextChange}
        />
      </div>
      <ul className="nav-links">
        <Link style={navStyle} to="/reservations">
          <li>Reservations</li>
        </Link>
        <Link to="/meals">
          <li>Meals</li>
        </Link>
        <Link to="/review">
          <li>Review</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
