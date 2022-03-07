import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardComponent from './cardContent';


export default function CardApi(props) {

    const [info, setInfo] = useState([]);

    const cardDataHandler = (cardData) => {
        props.cardData(cardData)
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
                <CardComponent
                    title={info.name}
                    key={info.id}
                    content={info.items}
                    cardData={cardDataHandler}
                />
            );
        })
    );
}
