import React from "react";

const Pizza = ({ pizzaObj }) => {
  const { name, photoName, ingredients, price, soldOut } = pizzaObj;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img alt={name} src={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : `Price: $${price}`}</span>
      </div>
    </li>
  );
};

export default Pizza;
