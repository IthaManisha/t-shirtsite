import React,{useContext} from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  const cartctx=useContext(CartContext);
  const sizeCounts = {};
  cartctx.items.forEach((item) => {
    if (item.size) {
      sizeCounts[item.size] = (sizeCounts[item.size] || 0) + item.quantity;
    }
  });
  const cartItems = (
    <div>
      {cartctx.items.map((item) => (
        <div key={item.id} className={classes.total}>
        <div>
        <div>
          <h3>{item.name}</h3> 
          <p>price:${item.price}</p>
          <p>quantity X{item.quantity}</p>
          <p>
              quantity X{item.quantity} {item.size}
            </p>
         </div>
        </div>
        <div className={classes.actions}>
        <p>{item.totalPrice}</p>
        </div>
        </div>
      ))}
    </div>
  );
  const totalAmountDisplay = typeof cartctx.totalAmount === 'number' ? `$${cartctx.totalAmount.toFixed(2)}` : 'N/A';

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountDisplay}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.hideHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;