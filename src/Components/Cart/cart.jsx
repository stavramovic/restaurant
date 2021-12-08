import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function Cart(props) {
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
                    <Grid item xs={8}>
                        <Typography sx={{textAlign: 'center'}}>
                            Item
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>
                            Price
                        </Typography>
                    </Grid>

                    {/* <Grid item xs={3} sx={{borderBottom: '1px solid grey'}}>
                        <Typography>
                            picture
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{borderBottom: '1px solid grey'}}>
                        <Typography>
                            {props.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{borderBottom: '1px solid grey'}}>            //create a new component
                        <Typography sx={{textAlign: 'center'}}>
                            {props.price}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{borderBottom: '1px solid grey'}}>
                        <Typography sx={{textAlign: 'end'}}>
                            delete
                        </Typography>
                    </Grid> */}

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

    
