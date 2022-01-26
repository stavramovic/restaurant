import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbars/navbar';
import Header from './Components/header';
import FoodBar from './Components/Navbars/foodBar';
import FoodSection from './Components/foodSection';
import Cart from './Components/Cart/cart';
import EmptyCart from './Components/Cart/emptyCart';
import CartItems from './Components/Cart/cartItems';
import OrderFormPortal from './Components/Form/orderForm';

import './sass/main.scss';


export default function App() {

  const [cartItems, setCartItems] = useState([])
  const [isFormVisible, setIsFormVisible] = useState()

  //Getting array of items
  const foodSectionDataHandler = (foodSection) => {
    setCartItems((prevState) => {
      return [...prevState, foodSection]
    })
  }

  //Delete item function
  const itemToDeleteHandler = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId))
    console.log(cartItems)
  }

  //Total price of ordered items
  const priceSum = cartItems.reduce((sum, item) => sum + parseInt(item.price), 0)


  //Open and close form
  const formVisibilityHandler = (form) => {
    setIsFormVisible(form)
  }

  const closeFormHandler = (formButton) => {
    setIsFormVisible(formButton)
  }

  //Set overflow to hidden when form is active
  useEffect(()=> {
   
    if(isFormVisible === true) {
      document.body.style.position = 'fixed'
      document.body.style.overflowY = 'scroll'
    } 
    else {
      document.body.style.position = 'static'
      document.body.style.overflowY = 'auto'
    }
    
  }, [isFormVisible])

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
              formVisibility={formVisibilityHandler}
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
              <OrderFormPortal isFormVisible={isFormVisible} closeForm={closeFormHandler}/>
            </Cart>
          }
        </div>
      </div>
    </>
  );
}