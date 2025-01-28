// const subreddits = ['chickens', 'dogs', 'lions', 'cats', 'tigers', 'pigs'];

// for (let i = 0; i < subreddits.length; i++ ) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

//For Of
// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`);
// }

//Seating Chart
// const seatingChart = [
//     ['Tony', 'Chris', 'Joe'],
//     ['Virat', 'Mahi', 'Sachin', 'Ricky'],
//     ['Olivia', 'Natalie', 'Emily', 'Ritz']
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`);
//     for ( let j = 0; j < row.length; j++) {
//         console.log(`   ${row[j]}`);
//     }
// }

//For Of
// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of 'Hello World') {
//     console.log(char);
// }

//Iterating through Object
const testScores = {
    Gary: 88,
    Mark: 64,
    Tony: 91,
    Elon: 56,
    Olivia: 97,
    Pritam: 78,
    May: 99,
    Chris: 82,
    Kim: 88,
    Natalie: 95,
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);
