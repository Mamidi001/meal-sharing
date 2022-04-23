import React, { useState, useEffect } from "react";
import "./Meal.css";
import { Link } from "react-router-dom";

function Reservations() {
  const [reservation, setReservation] = useState([]);
  useEffect(() => {
    fetchReservations();
  }, []);
  const fetchReservations = async () => {
    const data = await fetch("http://localhost:3000/api/reservations");
    const fetchResult = await data.json();
    setReservation(fetchResult);
  };
  const reservations = reservation.map((reservation) => (
    <h2>{reservation.email}</h2>
  ));

  return (
    <div>
      <h1>Reservation page</h1>
      <Link to="/addreservation">
        {" "}
        <button>Add Reservation</button>
      </Link>
      <img
        src="https://alsik.dk/wp-content/uploads/2021/05/Alsik_menu_maj_2021-57_web-scaled.jpg"
        alt="reservation pic"
      />

      <h2>{reservations}</h2>
    </div>
  );
}

export default Reservations;
