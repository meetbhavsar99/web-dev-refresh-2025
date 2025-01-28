// let random = Math.random();

// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!");
//     console.log(random);
// } else {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5!");
//     console.log(random);
// }

// let dayOfWeek = prompt("Enter any day: ").toLowerCase;

// if (dayOfWeek === 'monday') {
//     console.log("I hate mondays!");
// } else if (dayOfWeek === 'saturday') {
//     console.log("I love saturdays!");
// } else if (dayOfWeek === 'friday') {
//     console.log("I love fridays!");
// } else {
//     console.log("MEH!");
// }

// let age = prompt("Enter your age: ");

// if (age < 5) {
//     console.log("You are a baby. You get in for free!");
// } else if (age < 10) {
//     console.log("You are a child. You pay $10!");
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20!");
// } else {
//     console.log("You are a senior. You pay $10!");
// }

const password = prompt("Please enter a new password: ");

if (password.length >= 6) {
    console.log("Long enough password!");
    if (password.indexOf(' ') === -1) {
        console.log("No blank space! Valid password!");
    } else {
        console.log("Invalid password! Password cannot contain any blank space!");
    }
} else {
    console.log("Password is too short! It must be at least 6 characters long!");
    if (password.indexOf(' ') === -1) {
        console.log("No blank space! Valid password!");
    } else {
        console.log("Invalid password! Password cannot contain any blank space!");
    }
}