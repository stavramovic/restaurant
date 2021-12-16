import React from 'react';
import CardMedia from '@mui/material/CardMedia';


export default function FoodCardImage(props) {
    return (
        <CardMedia
            sx={{
                width: 280,
                height: 250,
                objectFit: 'fill'
            }}
            component='img'
            image={props.image}
            alt=''
        />
    );
}