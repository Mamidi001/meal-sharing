import React, { useState, useEffect } from "react";
import "./Meal.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
function SpecificId() {
  const { id } = useParams();

  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetchMeals();
  }, []);
  const fetchMeals = async () => {
    const data = await fetch(`http://localhost:3000/api/meals/${id}`);

    const fetchResult = await data.json();
    setMeal(fetchResult);
  };
  const meals = meal.map((meal) => (
    <div className="mealDeco">
      <Link to="/specific">
        <h2>{meal.title}</h2>
        <p>{meal.price}</p>
        <p>{meal.description}</p>
        <p>{meal.location}</p>
        <p>{meal.max_reservations}</p>
        <p>{meal.created_date}</p>
      </Link>
    </div>
  ));

  return (
    <div>
      <h1>Meal page</h1>
      <form className="meal-form">
        <input
          type="text"
          placeholder="add meal"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
      </form>
      <h2>{meals}</h2>
    </div>
  );
}

export default SpecificId;

// import React, { useState, useEffect } from "react";

// function specificId() {
//   useEffect(() => {}, []);
//   const [id, setId] = useState({});

//   const fetchId = async () => {
//     const fetchId = await fetch(`http://localhost:3000/api/reservations/${id}`);
//     const id = await fetchId.json();
//   };

//   return (
//     <div>
//       <h2>id</h2>
//     </div>
//   );
// }

// export default specificId;
