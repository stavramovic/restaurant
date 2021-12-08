import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FoodInfoComponent from './foodInfo-component';


export default function FoodInfo(props) {

    const [info, setInfo] = useState([]);

    // Passing info up the chain
    const cardInfoDataHandler = (enteredCardInfo) => {
        const cardInfo = {
            ...enteredCardInfo,
            id: Math.random().toString()
        };
        props.foodInfoData(cardInfo)
    };
    
    //Fetching data from database
    useEffect(() => {
        axios.get('/db/database.json')
        .then(res => {
            setInfo(res.data[0].menu); 
            console.log(res.data[0].menu)
        })
        .catch(err => console.log(err))
    }, []);

    return (
        info.map(info => {
            return (
                <FoodInfoComponent
                    title={info.name}
                    key={info.id}
                    content={info.items}
                    cardInfoData={cardInfoDataHandler}
                />
            );
        })
    );
}
