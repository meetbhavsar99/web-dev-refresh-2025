// let count = 0;

// while (count < 10) {
//     console.log(count);
//     count++;
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code: ");

// while (guess !== SECRET) {
//     guess = prompt("Please enter the secret code AGAIN!");
// }

// while (true) {
//     let message = prompt("Enter anything...");

//     if (message === "stop copying me") {
//         console.log("OK, YOU WIN! Exiting the loop...");
//         break;
//     } else {
//         console.log(message.toUpperCase());
//     }
// }

//guessing game

let maximum = parseInt(prompt("Enter the maximum number: "));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number: "));
}

targetNumber = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter the first guess: ");

let attempts = 1;
while (parseInt(guess) !== targetNumber) {
    if (guess === "q") break;

    guess = parseInt(guess);
    if(guess > targetNumber) {
        guess = prompt("High! Guess again!");
        attempts++;
    } else if (guess < targetNumber) {
        guess = prompt("Low! Guess again!");
        attempts++;
    } else {
        guess = prompt("Invalid guess! Please enter a valid number or 'q' to quit...");
    }
}

if (guess === "q") {
    console.log("OK, Quitting...");
} else {
    console.log(`CONGRATS! YOU WIN! You took ${attempts} guesses!`);
}