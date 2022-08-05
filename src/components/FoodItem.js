import React, { useState } from "react";

const FoodItem = (props) => {
  const { title, price } = props.FoodItem;

  return (
    <div
      className="foodItem-container"
      onClick={() => {
        if (props.clicked.length < 3) {
          props.selectFoodItem(props.FoodItem);
          props.generateComment(title);
        }
      }}
    >
      <h3 className={`food-display`}>
        {title}: <span className="price-tag">${price}</span>
      </h3>
    </div>
  );
};

export default FoodItem;
