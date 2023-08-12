import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import shirtImage from '../../assests/t-shirt.jpg'


const Header=(props)=>{
    return(
        <>
        <header className={classes.header}>
          
          <h1>T-shirt Website</h1>
          
          <HeaderCartButton onClick={props.showHandler}/>
          
        </header>
        <div className={classes['main-image']}>
        <img src={shirtImage} alt="a table for full of delicious food!"/>
        </div>
        </>
    )
}
export default Header;