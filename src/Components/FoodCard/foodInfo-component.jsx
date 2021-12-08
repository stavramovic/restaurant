import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function FoodInfoComponent(props) {


    const handleClick = (event) => {
        
        const cardInfo = {
            image: event.target.dataset.imagevalue,
            name: event.target.dataset.namevalue,
            price: event.target.dataset.pricevalue
        }
    
        props.cardInfoData(cardInfo);
    }


    return (
        <>
            <div className='title' id={props.title.replace(' ','-')}>{props.title}</div>
            <div className='card'>
                <div>
                    {props.content.map(info => {
                        return (
                            <Card 
                                sx={{
                                    width: 700,
                                    height: 250, 
                                    margin: 8,
                                    display: 'flex'
                                }}
                                key={info.id}
                            >
                                <CardMedia
                                    sx={{
                                        width: 280,
                                        height: 250,
                                        objectFit: 'fill'
                                    }}
                                    component='img'
                                    image={info.img}
                                    alt=''
                                />
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
                                        {info.name}
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
                                        {info.description}
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
                                        {info.size?.map((item, index) => {
                                            return (
                                                <ListItem
                                                    sx={{padding: '5px'}}
                                                    key={index}
                                                    disableGutters
                                                    secondaryAction={
                                                        <Button
                                                            data-imagevalue={info.img}
                                                            data-namevalue={info.name}
                                                            data-pricevalue={info.price[index]}
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
                                                            {info.price[index]} din.
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
                                        {info.size === undefined && 
                                            <Button
                                                data-imagevalue={info.img}
                                                data-namevalue={info.name}
                                                data-pricevalue={info.price}
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
                                                {info.price} din.
                                            </Button>
                                        }
                                    </List>
                                </CardContent> 
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
