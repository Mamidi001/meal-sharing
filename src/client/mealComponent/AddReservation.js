import React, { useState, useEffect } from "react";
import "./Meal.css";

function AddReservation() {
  const [reservations, setReservations] = useState([]);
  const [availableReservations, setAvailableReservations] = useState([]);
  const [availableTitles, setavAilableTitles] = useState([]);
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [phone, setPhone] = useState("");
  const [fullName, setFulllName] = useState("");
  const [email, setEmail] = useState("");
  const [mealId, setMealId] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [isDone, setIsDone] = useState(false);
  const fetchReservations = async () => {
    const data = await fetch("http://localhost:3000/api/reservations");
    const jsonData = await data.json();
    setReservations(jsonData);
  };
  const fetchAvailableReservations = async () => {
    const data = await fetch(
      "http://localhost:3000/api/meals?availableReservations=true"
    );
    const jsonData = await data.json();
    setAvailableReservations(jsonData);
  };
  useEffect(() => {
    fetchReservations();
    fetchAvailableReservations();
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    const reservationPost = {
      number_of_guests: numberOfGuests,
      created_date: date,
      phone_number: phone,
      contact_name: fullName,
      email: email,
      meal_id: mealId,
    };
    try {
      setIsDone(true);
      let res = await fetch("http://localhost:3000/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(reservationPost),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 201) {
        setFulllName("");
        setEmail("");
        setMessage("Reservation done successfully");
        setIsDone(false);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  /*
  function deleteReservation(id) {
    setInputReservation((reservations) => {
      const reservationsAfterDelete = reservations.filter(
        (reservation) => reservation.id !== id,
      );
      return reservationsAfterDelete;
    });
  }
   */
  console.log(availableTitles);
  return (
    <>
      {<h1> All {availableReservations.length} Available Reservations </h1>}
      <div className="display-container">
        {availableReservations.map((availableReservation) => {
          return (
            <div className="display-item">
              <p> Meal number : {availableReservation.id}</p>
              <p>{availableReservation.title}</p>
              <p> Seat Available: {availableReservation.max_reservations}</p>
            </div>
          );
        })}
      </div>
      <h1>Add Reservation</h1>
      {
        <form className="add-form" onSubmit={handleSubmit}>
          <label>
            Number of Guests
            <input
              type="number"
              name="number_of_guests"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              placeholder="Number of guests..."
            />
          </label>
          <label>
            meal ID
            <input
              type="number"
              name="number_of_guests"
              value={mealId}
              onChange={(e) => setMealId(e.target.value)}
              placeholder="Number of meals..."
            />
          </label>
          <label>
            Phone
            <input
              type="number"
              name="phone_number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number..."
            />
          </label>
          <label>
            Full Name
            <input
              type="text"
              name="contact_name"
              value={fullName}
              onChange={(e) => setFulllName(e.target.value)}
              placeholder="Enter your fullname..."
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@email.com"
            />
          </label>
          <label>
            Date
            <input
              type="date"
              name="created_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <div className="submit-form">
            {!isDone && <button type="submit">Add Reservation</button>}
            {isDone && (
              <button type="submit" disabled>
                Adding Reservation...{" "}
              </button>
            )}
          </div>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      }
      {<h1> All {reservations.length} reservations </h1>}
      <div className="display-container">
        {reservations.map((reservation) => (
          <div className="display-item">
            <h5> {reservation.contact_name}</h5>
            <p> {reservation.email}</p>
            <p>Phone : {reservation.phone_number}</p>
            <p> Number of Guests : {reservation.number_of_guests}</p>
            <p> Event Date: {reservation.created_date}</p>
            <p> meal ID : {reservation.meal_id}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default AddReservation;
