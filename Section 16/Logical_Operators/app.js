// let password = prompt("Enter your password: ");
// if (password.length >=6 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD!");
// } else {
//     console.log("INVALID PASSWORD! Please try again!");
// }

// let age = prompt("Please enter you age: ");

// if ((age > 0 && age < 5) || (age >= 65 && age < 125)) {
//     console.log("FREE");
// } else if (age >=5 && age < 10) {
//     console.log("$10");
// } else if (age >=10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("INVALID AGE! Please try again!");
// }

// let firstName =prompt("Please enter your first name: ");

// if (!firstName) {
//     firstName = prompt("TRY AGAIN! Please enter your FIRST NAME: ");3
// }

let number = prompt("Please enter any number: ");

switch (number) {
    case '1':
        console.log("Monday");
        break;
    case '2': 
        console.log("Tuesday");
        break;          
    case '3':
        console.log("Wednesday");
        break; 
    case '4':
        console.log("Thursday");
        break;
    case '5':
        console.log("Friday");
        break;
    case '6':
    case '7':
        console.log("WEEKEND!");
        break;
    default:
        console.log("INVALID NUMBER!! Please try again!");
        break;
}