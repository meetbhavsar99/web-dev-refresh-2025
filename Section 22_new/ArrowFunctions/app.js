// const add = function(x, y) {
//     return x + y;
// }

// function add(x, y) {
//     return x + y;
// }

// arrow function
const add = (x, y) => {
    return x + y;
};

const square = x => {
    return x * x;
};

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// };

// implicit return
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// );

//one-liner implicit return
const rollDie = () => Math.floor(Math.random() * 6) + 1;