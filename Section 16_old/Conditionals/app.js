// let random = Math.random();
// if (random < 0.5) {
//     console.log(`Your number ${random} is less than 0.5.`);
// } else {
//     console.log(`Your number ${random} is greater than (or equal to) 0.5.`);
// }

// const dayOfWeek = prompt("Enter the day of the week:").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log('Uggh! I hate Mondays!');
// } else if (dayOfWeek === 'saturday') {
//     console.log('Hurray! I love saturdays!');
// } else if (dayOfWeek === 'friday') {
//     console.log('Yay! Weekend starts tomorrow.');
// } else if (dayOfWeek === 'sunday') {
//     console.log('Let get some sleep.');
// } else {
//     console.log('Shit! I am tired already!');
// }

// const age = prompt('Enter your age:');

// if (age < 5) {
//     console.log("Free Entry!");
// } else if (age < 18) {
//     console.log('Child Pass! Half Ticket! Pay $10!')
// } else if (age < 65) {
//     console.log('Adult Pass! Full Ticket! Pay $20!')
// } else {
//     console.log('Senior Pass! Half Ticket! Pay $10!')
// }

// const password = prompt('Enter a new password:');

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('Valid Password! Good job!');
//     } else {
//         // console.log('Error! Space is invalid!');
//         console.warn('Error! Space is invalid!');
//     }
// } else {
//     // console.log('Short password. Enter 6+ digits!');
//     console.warn('Short password. Enter 6+ digits!');
// }

const day = prompt('Enter the number of the day:');

switch (day) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
    case '7':
        console.log('Weekend!');
        break;
    default:
        console.log('Invalid number!');
}