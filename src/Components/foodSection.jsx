import React from 'react';
import FoodCard from './FoodCard/foodCard';


export default function FoodSection(props) {

    const foodCardDataHandler = foodCard => {
        props.foodSectionData(foodCard)
    }

    return (
        <div className='foodSection'>
            <FoodCard foodCardData={foodCardDataHandler} />
        </div>
    );
}