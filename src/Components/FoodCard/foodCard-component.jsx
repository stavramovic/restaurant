import React from 'react';
import Card from '@mui/material/Card';
import FoodCardInfo from './FoodCard-components/FoodCard-info';
import FoodCardImage from './FoodCard-components/FoodCard-image';


export default function FoodCardComponent(props) {
    const enteredInfo = (enteredCardInfo) => {
        const cardInfo = {
            ...enteredCardInfo,
            id: Math.random().toString()
        };
        props.cardData(cardInfo)
    };
    

    return (
        <>
            <div className='title' id={props.title.replace(' ','-')}>{props.title}</div>
            <div className='card'>
                <div>
                    {props.content.map(info => {
                        return (
                            <Card 
                                sx={{
                                    width: 700,
                                    height: 250, 
                                    margin: 8,
                                    display: 'flex'
                                }}
                                key={info.id}
                            >
                                <FoodCardImage image={info.img} />
                                <FoodCardInfo 
                                    image={info.img} 
                                    name={info.name} 
                                    description={info.description} 
                                    size={info.size} 
                                    price={info.price} 
                                    enteredInfo={enteredInfo}/>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
