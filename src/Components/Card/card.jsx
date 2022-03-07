import React from 'react';
import CardApi from './cardApi';


export default function Card(props) {

    const cardDataHandler = (card) => {
        props.cardData(card)
    }

    return (
            <CardApi cardData={cardDataHandler} />
    );
}