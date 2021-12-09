import React, {useState} from 'react';
import Navbar from './Components/Navbars/navbar';
import Header from './Components/header';
import FoodBar from './Components/Navbars/foodBar';
import FoodSection from './Components/foodSection';
import Cart from './Components/Cart/cart';
import EmptyCart from './Components/Cart/emptyCart';
import CartItems from './Components/Cart/cartItems';

import './sass/main.scss';


export default function App() {

  const [cartItems, setCartItems] = useState([])    

  const foodSectionDataHandler = foodSection => {
    setCartItems((prevState)=> {
      return [...prevState, foodSection]
    })
  }

  /* let cartContent = <EmptyCart /> */

 /*  if(cartItems.length > 0) {
    cartContent = cartItems.map(item => {
      return (   */                                         
        
    /*   );
    })
  } */
  
 
  return (
    <>
      <Navbar />
      <div className='content'>
        <div className='content__main'>
          <Header />
          <div className='content__food'>
            <FoodBar />
            <FoodSection foodSectionData={foodSectionDataHandler} />
          </div>
        </div>
        <div className='cart'>
          {cartItems.length === 0 ? <EmptyCart /> : 
            <Cart>
              {cartItems.map(item=> {
                return (
                  <CartItems key={item.id} image={item.image} name={item.name} price={item.price}/>
                );
              })}
            </Cart>}
        </div>
      </div>
    </>
  );
}