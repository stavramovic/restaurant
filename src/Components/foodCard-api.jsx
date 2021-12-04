import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FoodCardComponent from './foodCard-component';


export default function FoodInfo() {

    const [info, setInfo] = useState([]);

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
                <FoodCardComponent
                    title={info.name}
                    key={info.id}
                    content={info.items}
                />
            );
        })
    );
}
