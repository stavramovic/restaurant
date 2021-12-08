import React from 'react';
import FoodInfo from './foodCard-api';


export default function FoodCard(props) {

    const foodInfoDataHandler = foodInfo => {
        props.foodCardData(foodInfo)
    }

    return (
            <FoodInfo foodInfoData={foodInfoDataHandler} />
    );
}