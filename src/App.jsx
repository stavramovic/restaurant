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

  //Getting array of items
  const foodSectionDataHandler = foodSection => {
    setCartItems((prevState)=> {
      return [...prevState, foodSection]
    })
  }

  //Delete item function
  const itemToDeleteHandler = itemId => {
    setCartItems(cartItems.filter(item => item.id !== itemId))
    console.log(cartItems)
  }

  //Total price of ordered items
  const priceSum = cartItems.reduce((sum, item) => sum + parseInt(item.price), 0)


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
            <Cart
              priceSum={priceSum}
            >
              {cartItems.map(item=> {
                return (
                  <CartItems 
                    key={item.id} 
                    id={item.id} 
                    image={item.image} 
                    name={item.name} 
                    price={item.price} 
                    itemToDelete={itemToDeleteHandler}
                  />
                );
              })}
            </Cart>
          }
        </div>
      </div>
    </>
  );
}