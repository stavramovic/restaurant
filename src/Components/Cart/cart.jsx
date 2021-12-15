import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Cart(props) {

    const handleClick = () => {
        const orderForm = true
        props.formVisibility(orderForm)
    }

    return (
        <Card 
            sx={{
                borderTop: 0, 
                borderLeft: 0, 
                borderRight: 0, 
                borderRadius: 0
            }}
        >
            <CardContent>
                <Typography sx={{textAlign: 'center', textDecoration: 'underline', fontStyle: 'italic'}}>
                    Cart:
                </Typography>
                <Grid container spacing={0}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6} sx={{padding: '3px'}}>
                        <Typography>
                            Item
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sx={{textAlign: 'end', padding: '3px'}}>
                        <Typography>
                            Price
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>

                    {props.children}
                                        
                    <Grid container spacing={0} sx={{height:'40px', alignItems: 'center', padding: '3px'}}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Ukupna cena
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{textAlign: 'end', fontStyle: 'italic'}}>
                            <Typography>
                                {props.priceSum} din
                            </Typography>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                    <Grid container item xs={12} sx={{justifyContent: 'center'}}>
                        <Button
                            variant='outlined'
                            sx={{
                                color: 'rgb(249, 105, 14)',
                                '&:hover': {backgroundColor: 'rgba(249, 105, 14, 0.1)', border: '1px solid rgb(249, 105, 14)'},
                                border: '1px solid rgb(249, 105, 14)',
                                width: '100px',
                                fontSize: '14px',
                                padding: '5px',
                                marginTop: '10px'
                            }}
                            onClick={handleClick}
                        >
                            Idi na kasu
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

    
