import React from 'react';
import FoodCardApi from './foodCard-api';


export default function FoodCard(props) {

    const foodCardDataHandler = foodCard => {
        props.foodCardData(foodCard)
    }

    return (
            <FoodCardApi foodCardData={foodCardDataHandler} />
    );
}