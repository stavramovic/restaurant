import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const FoodCardComponent = ({title, content}) => {

    return (
        <>
            <div className='title' id={title.replace(' ','-')}>{title}</div>
            <div className='card'>
                <div>
                    {content.map(info => {
                        return (
                            <Card 
                                sx={{
                                    width: 650,
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
                                    >
                                        {info.name}
                                    </Typography>
                                            
                                    <Typography 
                                        variant='body2'
                                        color='text.secondary'
                                        sx={{
                                            width: '80%', 
                                            textAlign: 'center',
                                            padding: '15px'
                                        }}
                                    >
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
                                        {info.size?.map((item, index) => (
                                            <ListItem
                                                sx={{padding: '5px'}}
                                                key={index}
                                                disableGutters
                                                secondaryAction={
                                                    <Button 
                                                        variant='outlined'
                                                        sx={{
                                                            color: 'rgb(249, 105, 14)',
                                                            '&:hover': {backgroundColor: 'rgba(249, 105, 14, 0.1)', border: '1px solid rgb(249, 105, 14)'},
                                                            border: '1px solid rgb(249, 105, 14)',
                                                            width: '80px',
                                                            fontSize: '14px',
                                                            padding: '0',
                                                        }}
                                                    >
                                                        {info.price[index]} 
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
                                        ))}
                                        {info.size === undefined && 
                                            <Button
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
                                                {info.price}
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

export default FoodCardComponent;