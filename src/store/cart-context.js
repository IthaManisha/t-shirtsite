import React from 'react';

const CartContext = React.createContext({
  items: [],
  quantity:0,
  totalAmount: 0,
  addItem: (item) => {},
});

export default CartContext
