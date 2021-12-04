import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function NavbarFood() {

    const [info, setInfo] = useState([]);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        axios.get('/db/database.json')
        .then(res => {
            setInfo(res.data[0].menu); 
            console.log(res.data[0].menu)
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <Tabs 
            value={value} 
            onChange={handleChange} 
            centered
            TabIndicatorProps={{
                style: {
                  backgroundColor: 'rgb(249, 105, 14)'
                }
              }}
        >
            {info.map(info => {
                return (
                    <Tab 
                        key={info.id} 
                        label={info.name}
                        sx={{
                            color: 'primary', 
                            '&.Mui-selected': {color: 'rgb(249, 105, 14)'}
                        }}
                        onClick={() => {
                            const anchor = document.querySelector(`#${info.name.replace(' ','-')}`)
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }} 
                    />      
                );
            })}
        </Tabs>
    );
}



