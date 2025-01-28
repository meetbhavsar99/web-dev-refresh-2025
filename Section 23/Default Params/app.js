// function rollDie (numSides) {
//     if(numSides == undefined) {
//         numSides = 6;
//     }
//     return Math.ceil(Math.random() * numSides);
// };

//New way
function rollDie(numSides = 6) {
    return Math.ceil(Math.random() * numSides);
};