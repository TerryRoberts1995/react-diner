import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Order from "./Order";

export default function App() {
  const [mainCourse, setMainCourse] = useState({ price: 0 });
  const [sideOne, setSideOne] = useState({ price: 0 });
  const [sideTwo, setSideTwo] = useState({ price: 0 });
  const [totalPrice, setTotalPrice] = useState(0);
  const [choice, setChoice] = useState("");
  const [comment, setComment] = useState("");
  const waitressComments = [
    `That is a great choice! I love the ${choice.title}`,
    `${choice.title} is really good!`,
    `The ${choice.title} goes great with a drink!`,
  ];

  const selectFoodItem = (FoodItem) => {
    if (mainCourse.price === 0) {
      setMainCourse(FoodItem);
    } else if (sideOne.price === 0) {
      setSideOne(FoodItem);
    } else if (sideTwo.price === 0) {
      setSideTwo(FoodItem);
    }
    setChoice(FoodItem);
  };

  const calculateTotalPrice = () =>
    Number(mainCourse.price) + Number(sideOne.price) + Number(sideTwo.price);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
    choice !== ""
      ? setComment(
          waitressComments[Math.ceil(Math.random() * waitressComments.length)]
        )
      : null;
  }, [mainCourse, sideOne, sideTwo, comment]);

  const resetItems = () => {
    setMainCourse({ price: 0 });
    setSideOne({ price: 0 });
    setSideTwo({ price: 0 });
  };

  return (
    <div className="app">
      <h2 className="diner-title">Bottega Diner</h2>
      <div className="all-menus">
        <Menu type={"breakfast"} selectFoodItem={selectFoodItem} />
        <Menu type={"lunch"} selectFoodItem={selectFoodItem} />
        <Menu type={"dinner"} selectFoodItem={selectFoodItem} />
      </div>
      <Order
        totalPrice={totalPrice.toFixed(2)}
        mainCourse={mainCourse}
        sideOne={sideOne}
        sideTwo={sideTwo}
        resetItems={resetItems}
      />
      <div className="waitress-comment">Waitress Comment: {comment}</div>
    </div>
  );
}
