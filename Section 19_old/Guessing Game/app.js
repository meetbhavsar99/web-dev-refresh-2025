let maximum = parseInt(prompt('Enter the maximum number...'));
while(!maximum) {
    maximum = parseInt(prompt('Enter the VALID number...'));
}

const targetNum = Math.ceil(Math.random() * maximum);
let attempts = 1;

let guess = parseInt(prompt('Enter your first guess...'));
while(parseInt(guess) !== targetNum) {
    if(guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess =prompt('Too high! Enter your next guess...');
    } else {
        guess = prompt('Too low! Enter your next guess...');
    }
}
if (guess === 'q') {
    console.log('Okay! You QUIT!');
} else {
    console.log('Horray! You WIN!');
    console.log(`Finallyy!! You got it! It took you ${attempts} guesses`)
}