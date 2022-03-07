import React from 'react';
import Card from '@mui/material/Card';
import CardInfo from './Card-components/cardInfo';
import CardImage from './Card-components/cardImage';


export default function CardComponent(props) {
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
                                <CardImage image={info.img} />
                                
                                <CardInfo 
                                    image={info.img} 
                                    name={info.name} 
                                    description={info.description} 
                                    size={info.size} 
                                    price={info.price} 
                                    enteredInfo={enteredInfo}
                                />
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
