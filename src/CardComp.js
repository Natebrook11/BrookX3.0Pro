import React from "react";
import "./ProjectGrid.css";

function Card({imageUrl, imageAlt, title, description}) {
  return (
    <div className="card">
      <img src={imageUrl} alt={imageAlt} />
      <div className="text">
        <h2 data-splitting="">{title}</h2>
        <p data-splitting="">{description}</p>
        <button className="card-button">Click me</button>
      </div>
    </div>
  );
}

export default Card;
