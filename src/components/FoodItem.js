import React from 'react';

const FoodItem = (props) => {
    const {title, price} = props.FoodItem;

    return (
        <div className='foodItem-container' onClick={()=> props.selectFoodItem(props.FoodItem)}>
            <h3 className='food-display'>{title}: <span className='price-tag'>${price}</span></h3>
        </div>
    )
}

export default FoodItem;