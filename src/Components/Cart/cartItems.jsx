import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function CartItems(props) {
    
    return (
        <>
            <Grid item xs={2} sx={{borderBottom: '1px solid grey'}}>
                <CardMedia
                    sx={{
                        width: 40,
                        height: 40,
                        objectFit: 'fill'
                    }}
                    component='img'
                    image={props.image}
                    alt=''
                />
            </Grid>
            <Grid item xs={3} sx={{borderBottom: '1px solid grey'}}>
                <Typography>
                    {props.name}
                </Typography>
            </Grid>
            <Grid item xs={4} sx={{borderBottom: '1px solid grey'}}>            
                <Typography sx={{textAlign: 'end'}}>
                    {props.price}
                </Typography>
            </Grid>
            <Grid item xs={3} sx={{borderBottom: '1px solid grey'}}>
                <Typography sx={{textAlign: 'end'}}>
                    delete
                </Typography>
            </Grid>
        </>
    );
}