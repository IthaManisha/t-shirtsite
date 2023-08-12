import React,{useState} from 'react'
import './App.css';
import Header from './components/Layout/Header';
import TshirtForm from './components/Tshirts/TshirtForm';
import TshirtList from './components/Tshirts/TshirtList';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {
  const[tshirtList,setTshirtList]=useState([])
  const[isCartOpen,setIsCartOpen]=useState(false)

  const cartOpenHandler=()=>{
    setIsCartOpen(true);
  }

  const cartHideHandler=()=>{
    setIsCartOpen(false)
  }

  

  const tshirtListHandler=(data)=>{
    const updatedList=[...tshirtList,data]
    setTshirtList(updatedList)
  }

  return (
    <CartProvider>
      {isCartOpen && <Cart hideHandler={cartHideHandler}/>}
      <Header showHandler={cartOpenHandler}/>
      <div>
      <TshirtForm onSaveData={tshirtListHandler} />
      </div>
      <TshirtList tshirts={tshirtList}/>
    </CartProvider>
  );
}

export default App;
