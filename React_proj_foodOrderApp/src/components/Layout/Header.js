import React from 'react'; // Using fragments 
import ReactMeals from '../../assets/ReactMeals.jpg';
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton.js";

function Header(props) {
    // props - onClick methoud for button
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div>
                <img className={classes['main-image']} src={ReactMeals} alt='A table full of food' />
            </div>
        </>
    )
};

export default Header;