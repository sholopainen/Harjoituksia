//Code along -tehtävä

let userInput = prompt("What do you want to do?")
const todos =["Collect eggs", "Empty litter box"];
while (userInput !== "quit" && userInput !== "q") {
    if(userInput === "list") {
        for (let i=0; i<todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
       
    } else if (userInput === "new") {
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (userInput === "delete") {
        const index = parseInt(prompt("OK, enter an index to delete:"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`OK, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index")
        }
    }
    userInput = prompt("What do you want to do?")
}
    console.log("OK, YOU QUIT!")
 

