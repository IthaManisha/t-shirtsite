import React,{useState} from "react";
import classes from './TshirtForm.module.css'

const TshirtForm=(props)=>{
    const[name,setName]=useState('');
    const[description,setDescription]=useState('')
    const[price,setPrice]=useState('')

    const nameHandler=(event)=>{
        setName(event.target.value);
    }

    const descriptionHandler=(event)=>{
        setDescription(event.target.value)
    }
    const priceHandler=(event)=>{
        setPrice(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const tshirtData={
            id:Math.random().toString(),
            name:name,
            description:description,
            price:price
        }
        props.onSaveData(tshirtData);
     setName('')
     setDescription('')
     setPrice('')

    }

    return(
        <div className={classes.summary}>
         <form onSubmit={submitHandler}>
            <label>T-shirt Name{'   '}</label>
            <input type="text" size="30" value={name} onChange={nameHandler}/>
            <label style={{paddingLeft:'10px'}} >Description</label>
            <input type="text" size="35" value={description} onChange={descriptionHandler} /><br/>
            <label >Price</label>
            <input type="number" value={price} onChange={priceHandler} />
            <label style={{paddingRight:'10px'}}>Quantity Available:</label>
            <button style={{paddingRight:'10px',paddingLeft:'10px'}}>M</button>
            <button style={{paddingRight:'10px',paddingLeft:'10px'}}>L</button>
            <button style={{paddingRight:'10px',paddingLeft:'10px'}}>XL</button><br/>
            <button type="submit">Add Product</button>
         </form>
        </div>
    )
}
export default TshirtForm