import React from 'react';
import Card from './Card/card';


export default function FoodSection(props) {

    const cardDataHandler = (foodCard) => {
        props.foodSectionData(foodCard)
    }

    return (
        <div className='foodSection'>
            <Card cardData={cardDataHandler} />
        </div>
    );
}