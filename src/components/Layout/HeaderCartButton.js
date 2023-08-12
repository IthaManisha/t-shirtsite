
import React, { useContext,useEffect,useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [numOfCartItems, setNumOfCartItems] = useState(0);

  useEffect(() => {
    const totalItems = cartCtx.items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setNumOfCartItems(totalItems);
  }, [cartCtx.items]);

  return (
    <div>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
