// CardProvider component manages current context data& provides it to all components that want to access it
import { useReducer } from 'react';
import CartContext from './Cart-context.js';

const defaultCartState = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item => {
            return (
                item.id === action.item.id
            );
        });

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            // If current item type already added
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
            // Concat = returns a new array with the item added to it 

        };

        return ({
            items: updatedItems,
            totalAmount: updatedTotalAmount
        });
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(item => {
            return (
                item.id === action.id
            );
        });
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            // If there's only one item of that type in the cart
            updatedItems = state.items.filter(item => item.id !== action.id);
            // The item will be removed from the array
        }
        else {
            // If there's more than one item of that type in the cart
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [ ...state.items ];
            updatedItems[existingCartItemIndex] = updatedItem;
            // The item will be kept in the array and its amount will be reduced
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return (
        defaultCartState
    );
};
function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };
    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };
    const CartContextHelper = {
        // Holds cart-related data and functions that will be shared with other components through React context
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };
    return (
        <CartContext.Provider value={CartContextHelper}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;