// function sum() {
//     return arguments.reduce((total, el) => total + el);
// };
// console.log(sum(1, 2, 3));

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el);
// };
// console.log(sum(1, 2, 3));

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO: ${everyoneElse}`);
}
console.log(raceResults('todd', 'thor', 'maya', 'tina', 'corpse'));