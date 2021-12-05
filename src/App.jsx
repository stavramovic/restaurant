import React from 'react';
import Navbar from './Components/navbar';
import Header from './Components/header';
import FoodBar from './Components/foodBar';
import FoodSection from './Components/foodSection';
import Cart from './Components/cart';

import './sass/main.scss';


export default function App() {
  return (
    <>
      <Navbar />
      <div className='content'>
        <div className='content__main'>
          <Header />
          <div className='content__food'>
            <FoodBar />
            <FoodSection />
          </div>
        </div>
        <Cart />
      </div>
    </>
  );
}