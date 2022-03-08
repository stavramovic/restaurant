import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Checkmark } from 'react-checkmark';


export default function ConfirmedOrder() {
    return (
        <>
        <Checkmark size="xxLarge"/>
        <Typography 
            gutterBottom variant='h5'
            component='div'
            sx={{
                color: 'gray',
                margin: '40px'
            }}
        >
            Porudžbina je potvrđena!
        </Typography>
        <Button
        variant='contained'
        sx={{
            backgroundColor: 'rgb(249, 105, 14)',
            '&:hover': {backgroundColor: 'rgb(249, 105, 14)'},
            width: '150px',
            fontSize: '14px',
            padding: '5px'
        }}
        type='submit'
    >
        Nazad na početnu
    </Button>
    </>
    );
}