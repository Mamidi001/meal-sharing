import React, { useState } from "react";
import { useParams } from "react-router";
import "./Meal.css";

function AddReservation() {
  const { id } = useParams();
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [phone, setPhone] = useState("");
  const [fullName, setFulllName] = useState("");
  const [email, setEmail] = useState("");
  const [mealId, setMealId] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservationTableData = {
      number_of_guests: numberOfGuests,
      created_date: date,
      phone_number: phone,
      contact_name: fullName,
      email: email,
      meal_id: id,
    };

    fetch("http://localhost:3000/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationTableData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("reservation added", id);
      })
      .catch((error) => {
        alert("Error:", error);
      });
  };

  return (
    <div className="container">
      <div className="addReservationForm">
        <form className="add-form" onSubmit={handleSubmit}>
          <label>
            Number of Guests
            <input
              type="number"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              placeholder="Number of guests..."
            />
          </label>
          <label>
            meal ID
            <input
              type="number"
              value={id}
              onChange={(e) => setMealId(e.target.value)}
              placeholder="Number of meals..."
              disabled
            />
          </label>
          <label>
            Phone
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number..."
            />
          </label>
          <label>
            Full Name
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFulllName(e.target.value)}
              placeholder="Enter your fullname..."
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@email.com"
            />
          </label>
          <label>
            Date
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <button type="submit">Add Reservation </button>
        </form>
        <img
          src="https://media.istockphoto.com/photos/restaurant-reserved-table-sign-picture-id675913544?k=20&m=675913544&s=612x612&w=0&h=gMeHfTJnBvPGW-RUGoZ-pamN5G_Dp09LxqRZugKXiJs="
          alt="reservation table pic"
        ></img>
      </div>
    </div>
  );
}

export default AddReservation;
