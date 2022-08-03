import React, { useState } from "react";

const FoodItem = (props) => {
  const { title, price } = props.FoodItem;
  const [clicked, setClicked] = useState("");

  return (
    <div
      className="foodItem-container"
      onClick={() => {
        setClicked("clicked");
        return props.selectFoodItem(props.FoodItem);
      }}
    >
      <h3 className={`food-display ${clicked}`}>
        {title}: <span className="price-tag">${price}</span>
      </h3>
    </div>
  );
};

export default FoodItem;
