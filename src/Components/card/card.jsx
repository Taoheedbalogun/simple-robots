import React from "react";
import "./card.style.css";

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
