import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';


export default function CartItems(props) {
    
    //Passing id of an selected item to parent component
    const handleDelete = () => {
        const deleteId = props.id;
        props.itemToDelete(deleteId)
    }
    return (
        <>
            <Grid container spacing={0} sx={{alignItems:'center', borderBottom: '1px solid grey', padding: '5px'}}>
                <Grid item xs={2}>
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
                <Grid item xs={6}>
                    <Typography>
                        {props.name}
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{textAlign: 'end'}}>            
                    <Typography>
                        {props.price}
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{textAlign: 'end'}}>
                    <DeleteIcon onClick={handleDelete} />
                </Grid>
            </Grid>
        </>
    );
}