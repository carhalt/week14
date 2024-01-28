import React, { useState } from "react";
import './stars.css';
import groundhog from '../stars/groundhog.png';

const Stars = ({ setStar }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
    setStar(ratingValue);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} onClick={() => handleClick(ratingValue)}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              style={{ display: "none" }} 
            />
            <img
              className="star"
              src={ratingValue <= (hover || rating) ? groundhog : groundhog}
              alt={`Star ${ratingValue}`}
              width={20}
              height={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>I rate this movie {rating + " Groundhogs"}</p>
    </div>
  );
};

export default Stars;

