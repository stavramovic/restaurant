import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function Cart(props) {
    console.log(props)
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
                <Grid container spacing={0} sx={{alignItems: 'flex-end'}}>
                    <Grid item xs={5}>
                        <Typography sx={{textAlign: 'center'}}>
                            Item
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography sx={{textAlign: 'center'}}>
                            Price
                        </Typography>
                    </Grid>

                    {props.children}

                    <Grid item xs={12}>
                        <Typography textAlign='end'>
                            ukupna cena
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
          
    );
}

    
