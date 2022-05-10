import React, { useState, useEffect } from "react";
import "./Meal.css";
//import { Link } from "react-router-dom";

function Reservations() {
  const [reservation, setReservation] = useState([]);
  useEffect(() => {
    fetchReservations();
  }, []);
  const fetchReservations = async () => {
    const data = await fetch("/api/reservations");
    const fetchResult = await data.json();
    setReservation(fetchResult);
  };
  const reservations = reservation.map((reservation) => (
    <div className="reservation-page">
      {" "}
      <p>
        <span>Name: {reservation.contact_name}</span>
      </p>
      <p>
        <span>Number of Guests : {reservation.number_of_guests}</span>
      </p>
      <p>Email: {reservation.email}</p>
    </div>
  ));

  return (
    <div>
      <img
        className="reservation-pic"
        src="https://alsik.dk/wp-content/uploads/2021/05/Alsik_menu_maj_2021-57_web-scaled.jpg"
        alt="reservation pic"
      ></img>
      <h1 className="reservation-h1">All Reservations</h1>

      <div className="all-reservations">
        <h2>{reservations}</h2>
      </div>
    </div>
  );
}

export default Reservations;
