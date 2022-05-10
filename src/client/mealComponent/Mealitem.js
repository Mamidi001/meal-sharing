import React from "react";
import "./Meal.css";
const Mealitem = (getMeal) => {
  return (
    <>
      <div className="card">
        <img src={getMeal.data}></img>
        <div className="info">
          <h2>Pancakes</h2>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="recipe">
            <img src={getMeal.data}></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mealitem;
