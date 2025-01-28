// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for(let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.ceil(Math.random() * 6);
//     console.log(roll);
// }

// callTwice(rollDie);

//Returning Functions
// function makeMysteryFunc() {
//     const rand = Math.random();
//     if(rand > 0.5) {
//         console.log('Congrats!');
//         console.log('YOU JUST WON A MILLION DOLLARS!!');
//     } else {
//         alert('GOTCHA! YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!');
//         alert('STOP TRYING TO CLOSE THIS WINDOW!!');
//         alert('STOP TRYING TO CLOSE THIS WINDOW!!');
//         alert('STOP TRYING TO CLOSE THIS WINDOW!!');
//         alert('STOP TRYING TO CLOSE THIS WINDOW!!');
//         alert('STOP TRYING TO CLOSE THIS WINDOW!!');
//     }
// }

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

// makeBetweenFunc(5, 10);

// function isBetweenFunc(num) {
//     return num >= 50 && num <= 100;
// }