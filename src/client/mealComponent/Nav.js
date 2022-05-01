//import { response } from "express";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Nav() {
  const [query, setQuery] = useState("");
  const url = `http://localhost:3000/api/meals`;
  async function getMealData() {
    const result = await Axios.get(url);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getMealData();
  };

  return (
    <nav>
      <h3>Logo</h3>
      <div className="search-component">
        <form className="search-form" onSubmit={onSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="search-meal"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input className="submit-btn" type="submit" value="search" />
        </form>
      </div>
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
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
