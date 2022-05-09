import React, { useState, useEffect } from "react";
import "./Meal.css";
import { Link } from "react-router-dom";
import Mealitem from "./Mealitem";

//import specificId from "./SpecificId";
function Meals() {
  useEffect(() => {
    fetchMeals();
  }, []);
  const [meal, setMeal] = useState([]);
  const fetchMeals = async () => {
    const data = await fetch(`http://localhost:3000/api/meals`);
    const fetchResult = await data.json();
    setMeal(fetchResult);
    //console.log(meal);
  };
  //   return (
  //     <div>
  //       {meal.map((item) => (
  //         <h1 key={item.meal.id}>
  //           <Link to={`meals/${item.meal.id}`}>{meal.title}</Link>
  //         </h1>
  //       ))}
  //     </div>
  //   );
  // }
  const meals = meal.map((items, index) => {
    return (
      <div className="meal-deco" key={index}>
        <div>
          <Link exact to={`meals/${items.id}`}>
            {" "}
            <h2>{items.title}</h2>
            <h2>Id: {items.id}</h2>
            <img
              className="meal-img"
              src="https://static.toiimg.com/photo/76942221.cms"
            />
            <h4> {items.description} </h4>
            <p>Price : {items.price} dkk</p>
          </Link>
          <Link exact to={`addreservation/${items.id}`}>
            <button className="Add review">Add Reservation</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="all-meals-display">
      <h1 className="meal-menu">Meals Menu</h1>
      {/* <Link exact to={"/add"}>
        <button>ADD ANOTHER MEAL</button>
      </Link> */}
      <div className="all-meals">{meals}</div>
    </div>
    // <div className="all-meals">
    //   <h2>{meals}</h2>
    // </div>
  );
}

//   const [search, setSearch] = useState();
//   const [meal, setMeal] = useState();
//   const searchMeal = (e) => {
//     if (e.key === "Enter") {
//       fetch(`http://localhost:3000/api/meals`)
//         .then((res) => res.json())
//         .then((data) => setMeal(data.meals));
//     }
//   };
//   return (
//     <div className="main">
//       <div className="heading">
//         <h1>search your favourite meal</h1>
//         <h4>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book.
//         </h4>
//       </div>
//       <div className="searchBox">
//         <input
//           className="search-bar"
//           type="text"
//           placeholder="search"
//           onChange={(e) => setSearch(e.target.value)}
//           value={search}
//           onKeyPress={searchMeal}
//         />
//       </div>
//       <div className="container">
//         {meal == null ? (
//           <p className="not-found">Not Found</p>
//         ) : (
//           meal.map((res) => {
//             return <Mealitem data={res} />;
//           })
//         )}
//       </div>
//     </div>
//   );
// }
export default Meals;

//export default Meals;
