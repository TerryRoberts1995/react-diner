import React from 'react';

const FoodItem = (props) => {
    const {title, price} = props.FoodItem;

    return (
        <div className='FoodItem-container'>
            <h3>{title}</h3>
            <div>{price}</div>
        </div>
    )
}

export default FoodItem;