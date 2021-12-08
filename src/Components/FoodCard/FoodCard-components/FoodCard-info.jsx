import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function FoodCardInfo(props) {

    const handleClick = (event) => {
        
        const cardInfo = {
            image: event.target.dataset.imagevalue,
            name: event.target.dataset.namevalue,
            price: event.target.dataset.pricevalue
        }
    
        props.enteredInfo(cardInfo);
    }

    return (
        <CardContent 
            sx={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '10px',
                textAlign: 'center'
            }}
        >
            <Typography 
                gutterBottom variant='h5'
                component='div'
                sx={{marginBottom: 0}}
            >
                {props.name}
            </Typography>
                    
            <Typography 
                variant='body2'
                color='text.secondary'
                sx={{
                    width: '100%', 
                    textAlign: 'center',
                    padding: '15px'
                }}
            >
                {props.description}
            </Typography>
            <List 
                sx={{
                    width: '100%',
                    bgcolor: 'background.paper', 
                    padding: '0', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'flex-end'
                }}
            >
                {props.size?.map((item, index) => {
                    return (
                        <ListItem
                            sx={{padding: '5px'}}
                            key={index}
                            disableGutters
                            secondaryAction={
                                <Button
                                    data-imagevalue={props.image}
                                    data-namevalue={props.name}
                                    data-pricevalue={props.price[index]}
                                    onClick={handleClick}
                                    variant='outlined'
                                    sx={{
                                        color: 'rgb(249, 105, 14)',
                                        '&:hover': {backgroundColor: 'rgba(249, 105, 14, 0.1)', border: '1px solid rgb(249, 105, 14)'},
                                        border: '1px solid rgb(249, 105, 14)',
                                        width: '80px',
                                        fontSize: '14px',
                                        padding: '0'
                                    }}
                                >
                                    {props.price[index]} din.
                                </Button>
                            }
                        >
                        <ListItemText 
                            primaryTypographyProps={{
                                fontSize: '14px'
                            }}  
                            primary={item} 
                        />
                        </ListItem>
                    );
                })}
                {props.size === undefined && 
                    <Button
                        data-imagevalue={props.image}
                        data-namevalue={props.name}
                        data-pricevalue={props.price}
                        onClick={handleClick}
                        variant='outlined'
                        sx={{
                            color: 'rgb(249, 105, 14)',
                            '&:hover': {backgroundColor: 'rgba(249, 105, 14, 0.1)', border: '1px solid rgb(249, 105, 14)'},
                            border: '1px solid rgb(249, 105, 14)',
                            width: '80px',
                            fontSize: '14px',
                            padding: '0',
                            marginTop: '30px'
                        }}
                    >
                        {props.price} din.
                    </Button>
                }
            </List>
        </CardContent> 
    );
}