//Basic syntax of an arrow function:
//(parameters) => expression

//Arrow Function with Multiple Statements (using curly braces {}):
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(4, 6)); // Output: 24

//forEach(): Iterates through each element of the array and applies a callback function.
//Syntax with Arrow Function:
numbers.forEach(number => {
    console.log(number);
});

//map(): Creates a new array by applying a callback function to each element of the array.
//Syntax with Arrow Function:
const doubledNumbers = numbers.map(number => number * 2);

//filter(): Creates a new array with elements that pass a certain condition defined in a callback function.
//Syntax with Arrow Function:
const evenNumbers = numbers.filter(number => number % 2 === 0);

//reduce(): Reduces the array to a single value by applying a callback function and accumulating results.
//Syntax with Arrow Function:
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);

//some(): Checks if at least one element in the array satisfies a condition defined in a callback function.
//Syntax with Arrow Function:
const hasEvenNumber = numbers.some(number => number % 2 === 0);

//every(): Checks if all elements in the array satisfy a condition defined in a callback function.
//Syntax with Arrow Function:
const foundNumber = numbers.find(number => number > 2);



