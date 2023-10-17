// MealItem component is responsible for rendering a single meal item 
import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm.js';
import CartContext from '../../store/Cart-context.js';

function MealItem(props) {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addItemToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddItemToCart={addItemToCartHandler} />
            </div>
        </li>
    )
};
export default MealItem;