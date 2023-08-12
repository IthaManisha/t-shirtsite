
import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to add an item to the cart
const addItemToCartHandler = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    
  if (existingItem) {
      // Item already exists, update its amount
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id ? 
          { ...cartItem,
            quantity: cartItem.quantity + 1,
            totalPrice: parseFloat(cartItem.totalPrice) + parseFloat(cartItem.price), 
        } : cartItem
          
          
        )
      );
    } else {
      // Item is new, add it to the cart
      setCartItems((prevItems) => [...prevItems,  { ...item, quantity: 1,totalPrice:item.price,
        size:"1"+item.size
    }]);
     
    }
    // Update the total amount
    
    setTotalAmount((totalAmount) => totalAmount + item.amount*item.price);
    console.log('size:',item.size);
  };
  
  
  
  const cartContext = {
    items: cartItems,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
