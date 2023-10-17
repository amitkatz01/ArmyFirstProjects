// Meals component is responsible for rendering the meals list
import MealsSummary from './MealsSummary.js';
import AvailableMeals from './AvailableMeals.js';
import React from 'react'; // Using fragments 

function Meals (){
    return(
    <>
    <MealsSummary/>
    <AvailableMeals/>
    </>
    )
};

export default Meals;