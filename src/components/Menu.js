import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";

const Menu = (props) => {
  const [allFoodItems, setFoodItems] = useState([]);
  const url =
    props.type === "breakfast"
      ? "breakfast"
      : props.type === "lunch"
      ? "lunch"
      : "dinner";

  const getAllFoodItems = () => {
    fetch(`http://127.0.0.1:5000/food/get/${url}`)
      .then((res) => res.json())
      .then((res) => setFoodItems(res));
  };

  const renderAllItems = () => {
    return allFoodItems.map((item) => {
      return (
        <FoodItem
          menu={props.type}
          selectFoodItem={props.selectFoodItem}
          FoodItem={item}
        />
      );
    });
  };

  useEffect(() => {
    getAllFoodItems();
  }, []);

  return (
    <div className="menu-container">
      <h1 className="menu-title">{props.type.toUpperCase()}</h1>
      {renderAllItems()}
    </div>
  );
};

export default Menu;
