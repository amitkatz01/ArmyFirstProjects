// Assignment: Create a todo list using prompt. Following the rules in the html file.  
// "new" - Add A Todo
// "list" - List All Todos
// "delete" - Remove Specific Todo
// "quit" - Quit App

let userInput = prompt("What would you like to do?");
const todos = [];
while (userInput.toLowerCase() !== "quit") {
    if (userInput.toLowerCase() === "list") {
        // If user wants to print his to do list
        console.log("~~~~~~~~~~~~");
        for (i = 0; i < todos.length; i++) {
            console.log(i + 1 + ": " + todos[i]);
        }
        //Print contents of array
        console.log("~~~~~~~~~~~~");
    }
    else if (userInput.toLowerCase() === "new") {
        const newTodo = prompt("Enter new todo");
        todos.push(newTodo); //Add input to array of todos
        console.log(newTodo + " was added to your to do list!");
    }
    else if (userInput.toLowerCase() === "delete") {
        // if user wants to delete a to do from list
        let whichToDelete = prompt("Enter number of item you would like to remove from list");
        while (isNaN(whichToDelete) || (whichToDelete > todos.length) || (whichToDelete <= 0)) {
            //if input is not a number/ number is bigger than the amount of items on list/ number is smaller then or equal to zero
            whichToDelete = prompt("Please enter a valid number that is in the list!");
        }
        const deleted = todos.splice((whichToDelete - 1), 1);
        console.log("Item number" + (whichToDelete) + " (" + deleted + ") " + " was deleted.")
        // Printing the number of item & which item was deleted
    }
    userInput = prompt("What would you like to do?");
}
if (todos[0] != null) {
    // If to do list is not empy -> print it out for the use
    console.log("Your to do list is complete! Here it is:");
    //printing final list after user quit:
    console.log("~~~~~~~~~~~~");
    for (i = 0; i < todos.length; i++) {
        console.log(i + 1 + ": " + todos[i]);
    }
    //Print contents of array
    console.log("~~~~~~~~~~~~");
}