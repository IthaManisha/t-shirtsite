import React, { useState, useContext } from 'react';
import Card from '../UI/Card';
import CartContext from '../../store/cart-context';

const TshirtList = (props) => {
  const cartCtx = useContext(CartContext);
  const [largeCount, setLargeCount] = useState(100);
  const [mediumCount, setMediumCount] = useState(100);
  const [xlCount, setXlCount] = useState(100);
  
  const buyItem = (size,tshirt) => {
        
    const itemToAdd = {
        id: tshirt.id,
        name: tshirt.name,
        amount: 1, // Set the amount to 1
        price: tshirt.price,
        size:size
      };
    
      cartCtx.addItem(itemToAdd);
        
    if (size === 'medium') {
      if (mediumCount > 0) {
        setMediumCount((prevCount) => prevCount - 1);
       
      }
    } else if (size === 'large') {
      if (largeCount > 0) {
        setLargeCount((prevCount) => prevCount - 1);
      
      }
    } else if (size === 'xlarge') {
      if (xlCount > 0) {
        setXlCount((prevCount) => prevCount - 1);
       
       
      }
    }
  };
  

  return (
    <Card>
      {props.tshirts.map((tshirt) => (
        <div key={tshirt.id}>
          <h>{tshirt.name}</h>
          <h style={{ paddingLeft: '70px' }}>{tshirt.description}</h>
          <h style={{ paddingLeft: '70px' }}>{tshirt.price}</h>
          <button onClick={() => buyItem('medium',tshirt)}>Buy Medium ({mediumCount})</button>
          <button onClick={() => buyItem('large',tshirt)}>Buy Large ({largeCount})</button>
          <button onClick={() => buyItem('xlarge',tshirt)}>Buy XLarge ({xlCount})</button>
        </div>
      ))}
    </Card>
  );
};

export default TshirtList;
