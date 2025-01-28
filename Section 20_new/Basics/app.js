// function singSong() {
//     console.log("Ah");
//     console.log("Aah");
//     console.log("Aaah");
//     console.log("Coming...");
// }

// singSong();

// function greet(firstName, lastName) {
//     console.log(`Hi there, ${firstName} ${lastName[0]}.!`);
// }

// greet("Frances", "Bentley");

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }

// function add(x, y) {
//     if(typeof x !== 'number' || typeof y !== 'number') {
//         return NaN;
//     }
//     return x + y;
// }

// DEFINE YOUR FUNCTION BELOW:

function returnDay(num) {
    switch (num) {
        case '1':
            return 'Monday';
        case '2':
            return 'Monday';
        case '3':
            return 'Monday';
        case '4':
            return 'Monday';
        case '5':
            return 'Monday';
        case '6':
            return 'Monday';
        case '7':
            return 'Monday';
        default:
            return null;
    }
}

returnDay('1');