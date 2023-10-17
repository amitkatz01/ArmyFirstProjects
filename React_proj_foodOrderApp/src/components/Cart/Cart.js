import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal.js';
import CartContext from '../store/Cart-context.js';
import CartItem from './CartItem.js';

function Cart(props) {
    // props- onClick method for 'close' button& backdrop
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const isCartEmpty = cartCtx.items.length < 1;
    // Boolean - if cart is empty

    const removeItemHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const addItemHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => {
            return (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemove={removeItemHandler.bind(null, item.id)}
                    onAdd={addItemHandler.bind(null, item)}
                />
                // <li key={item.id} >{item.name}</li>
            );
        })}
    </ul>

    return (
        <Modal onBackdropClick={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {!isCartEmpty && <button className={classes.button}>Order</button>}
                {/* Show order button only if there are items in the cart */}
            </div>
        </Modal>
    )
};

export default Cart;