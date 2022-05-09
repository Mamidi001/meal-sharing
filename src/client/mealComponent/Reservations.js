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
    <div>
      {" "}
      <h2>{reservation.email}</h2>
      <p>
        <span>Name: {reservation.contact_name}</span>
      </p>
    </div>
  ));

  return (
    <div>
      <h1 className="reservation-h1">All Reservations</h1>
      <Link to="/addreservation">
        {" "}
        <button>Add Reservation</button>
      </Link>
      <div className="reservation-pic">
        src="https://alsik.dk/wp-content/uploads/2021/05/Alsik_menu_maj_2021-57_web-scaled.jpg"
        alt="reservation pic"
      </div>

      <h2>{reservations}</h2>
    </div>
  );
}

export default Reservations;
