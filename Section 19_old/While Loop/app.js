//0 to 9
// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

//Secret Code
// const secretCode = 'BabyHippo';

// let guess = prompt('Guess the secret code...');
// while(guess != secretCode) {
//     guess = prompt('Guess the secret code...');
// }
// console.log('CONGRATS! You got it!!')

//Break with While
let input = prompt('Say something...');

while(true) {
    input = prompt(input);
    if (input.toLowerCase() === 'stop copying me') {
        break;
    }
}
console.log('Okay! You win!');