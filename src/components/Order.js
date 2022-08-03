import React from "react";

const Order = (props) => {
  return (
    <div className="order-container">
      <div className="all-items">
        <div className="order-item">{props.mainCourse.title}</div>
        <div className="order-item">{props.sideOne.title}</div>
        <div className="order-item">{props.sideTwo.title}</div>

        <div className="display-total">
          <div className="total-price">
            Total: <span>{props.totalPrice}$</span>
          </div>
          <button className="reset-btn" onClick={() => props.resetItems()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
