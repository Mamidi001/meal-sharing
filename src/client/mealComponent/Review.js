import React, { useState, useEffect } from "react";

import "./Meal.css";

function Review() {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetchReview();
  }, []);
  const fetchReview = async () => {
    const data = await fetch("http://localhost:3000/api/review");
    const fetchResult = await data.json();
    setReview(fetchResult);
  };
  const reviews = review.map((review) => <h2>{review.title}</h2>);

  return (
    <div>
      <h1>Review Page</h1>
      {reviews}
    </div>
  );
}

export default Review;
