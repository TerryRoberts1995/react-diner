import React, { useState, useEffect } from "react";

const FoodItem = (props) => {
  const { title, price, id } = props.FoodItem;
  const [style, setStyle] = useState("");

  return (
    <div
      className="foodItem-container"
      onClick={() => {
        if (props.clicked.length < 3) {
          props.selectFoodItem(props.FoodItem);
          props.generateComment(title);
          setStyle("clicked");
        }
      }}
    >
      <h3
        className={`food-display ${
          !props.reset && props.clicked.includes(id) ? style : ""
        }`}
      >
        {title}: <span className="price-tag">${price}</span>
      </h3>
    </div>
  );
};

export default FoodItem;
