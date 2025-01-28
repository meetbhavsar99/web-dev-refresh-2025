let command = prompt("What would you like to do?");

let todoList = [];

while(command.toLowerCase() !== "quit" && command.toLowerCase() !== "q") {
    if(command.toLowerCase() === "new") {
        let newItem = prompt("Enter a new to-do item:");
        todoList.push(newItem);
        console.log(`"${newItem}" added to the list.`);
        console.log("\n");

        while(true) {
            newItem = prompt("Add another to-do item or type 'done' to go back to the main menu:");
            if(newItem.toLowerCase() === 'done') break;
            todoList.push(newItem);
            console.log(`"${newItem}" added to the list.`);
            console.log("\n");
        }

        command = prompt("What would you like to do?");
    } else if (command.toLowerCase() === "list") {
        console.log("**********");
        console.log("To-do List:");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("**********");
        console.log("\n");

        command = prompt("What would you like to do?");
    } else if (command.toLowerCase() === "delete") {
        let index = prompt("Enter the index of the to-do list item you would like to delete:");
        // can also use Number.isNaN(something) to check if it's a number or not
        if(index < 0 || index >= todoList.length) {
            console.log("Invalid index. Please try again.");
            console.log("\n");
            command = prompt("What would you like to do?");
            continue;
        }
        let deletedItem = todoList.splice(index, 1);
        console.log(`"${deletedItem}" removed from the list.`);
        console.log("\n");


        while (true) {
            let deleteAnother;
            deleteAnother = prompt("Enter the index of another item to delete or type 'done' to go back to the main menu:");
            if(deleteAnother.toLowerCase() === 'done') break;
            if(deleteAnother < 0 || deleteAnother >= todoList.length) {
                console.log("Invalid index. Please try again.");
                console.log("\n");
                command = prompt("What would you like to do?");
                continue;
            }
            deleteAnother = todoList.splice(deleteAnother, 1);
            console.log(`"${deleteAnother}" removed from the list.`);
            console.log("\n");
        }
    
        command = prompt("What would you like to do?");
    } else {
        command = prompt("I didn't get you! What would you like to do?");
    }
}

console.log("You have quit the app.");