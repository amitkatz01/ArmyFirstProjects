import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input.js';

function MealItemForm(props) {
    const [isFormValid, setIsFormValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        // value is always a string 
        const enteredAmountNum = +enteredAmount;
        // Convert to number

        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            // Checking for validaty 
            setIsFormValid(false);
            return;
        };

        props.onAddItemToCart(enteredAmountNum);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label='Amount' input={{
                ref: amountInputRef,
                id: 'amount_' + props.id,
                // Each input gets a unique id
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+Add</button>
            {!isFormValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
};
export default MealItemForm;