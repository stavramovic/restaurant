import React from 'react';
import BlackButton from '../Button/blackButton.jsx';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function Navbar() {
    return (
        <nav className='navbar'>
            <a className='logo' href='/'>Restaurant</a>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 40 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <div className='loginButton'>
                <BlackButton  param='Prijava'/>
                <BlackButton  param='Registracija'/>
            </div>
        </nav>
    );
}