// // spell-checker: disable
// const subreddits = ['soccer', 'popheads', 'cringe', 'books'];
// // spell-checker: enable

// function link(url) {
//     return `<a href="${url}">${url}</a>`;
// }

// for (let sub of subreddits) {
//     console.log(`Visit ${link(`https://reddit.com/r/${sub}`)}`);
// }

// for (let char of "Hello world!") {
//     console.log(char);
// }

let testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// for (let person in testScores) {
//     console.log(`${person}: ${testScores[person]}`);
// }

let sum = 0;
let average = 0;
for (let score of Object.values(testScores)) {
    console.log(score);
    sum += score;
    average = sum / Object.values(testScores).length;
}

console.log(sum);
console.log(average);
