// const add = function (x, y) {
//     return x + y;
// }

// higher order function

// let doMultipleTimes = function (func, numTimes) {
//     for (let i = 0; i < numTimes; i++) {
//         func();
//     }
// }

// let rollDie = function () {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// passing a function as an argument

let makeMysteryFunc = function (min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// to run this function, we need to store it in a variable
let isChild = makeMysteryFunc(0, 18);
let isAdult = makeMysteryFunc(19, 64);
let isSenior = makeMysteryFunc(65, 120);

// then we can run the function 
console.log(isChild(5)); // true