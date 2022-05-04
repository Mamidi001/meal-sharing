//import { json } from "body-parser";
import React, { useState, useEffect } from "react";
import "./Meal.css";

function AddReservation() {
  //const [reservations, setReservations] = useState([]);
  //const [availableReservations, setAvailableReservations] = useState([]);
  //const [availableTitles, setavAilableTitles] = useState([]);
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [phone, setPhone] = useState("");
  const [fullName, setFulllName] = useState("");
  const [email, setEmail] = useState("");
  const [mealId, setMealId] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  //const [isDone, setIsDone] = useState(false);

  // const fetchReservations = async () => {
  //   const data = await fetch("http://localhost:3000/api/reservations");
  //   const jsonData = await data.json();
  //   setReservations(jsonData);

  //const fetchAvailableReservations = async () => {
  // let res = await fetch(
  //   "http://localhost:3000/api/meals?availableReservations=true",
  //   {
  //     method: "POST",
  //     body: JSON.stringify({
  //       number_of_guests: number_of_guests,
  //       created_date: created_date,
  //       phone_number: phone_number,
  //       contact_name: contact_name,
  //       email: email,
  //       meal_id: meal_id,
  //     }),
  //   }
  // );
  //let resJson = await res.json();

  let handleSubmit = async (e) => {
    //console.log("hello everyone");
    e.preventDefault();
    try {
      //setIsDone(true);
      let res = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        body: JSON.stringify({
          number_of_guests: numberOfGuests,
          created_date: date,
          phone_number: phone,
          contact_name: fullName,
          email: email,
          meal_id: mealId,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setFulllName("");
        setEmail("");
        setMessage("Reservation done successfully");
        //setIsDone(false);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <div>
      <h1>Add Reservation</h1>

      <form className="add-form" onSubmit={handleSubmit}>
        <label>
          Number of Guests
          <input
            type="number"
            //name="number_of_guests"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            placeholder="Number of guests..."
          />
        </label>
        <label>
          meal ID
          <input
            type="number"
            //name="number_of_guests"
            value={mealId}
            onChange={(e) => setMealId(e.target.value)}
            placeholder="Number of meals..."
          />
        </label>
        <label>
          Phone
          <input
            type="number"
            //name="phone_number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number..."
          />
        </label>
        <label>
          Full Name
          <input
            type="text"
            //name="contact_name"
            value={fullName}
            onChange={(e) => setFulllName(e.target.value)}
            placeholder="Enter your fullname..."
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            //name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@email.com"
          />
        </label>
        <label>
          Date
          <input
            type="date"
            //name="created_date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit">Add Reservation </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}
export default AddReservation;
