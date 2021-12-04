import React from 'react';
import SearchBar from 'material-ui-search-bar';
import BlackButton from './blackButton.jsx';


export default function Navbar() {
    return (
        <nav className='navbar'>
            <a className='logo' href='/'>Restaurant</a>
            <SearchBar 
                style={{
                    height: 40, 
                    width: 400, 
                    backgroundColor: '#f7f7f7'
                }} 
            />
            <div className='loginButton'>
                <BlackButton  param='Prijava'/>
                <BlackButton  param='Registracija'/>
            </div>
        </nav>
    );
}