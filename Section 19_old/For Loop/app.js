// for (let i=1; i <= 10; i++) {
//     console.log(i);
// }

// Odd numbers
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// Even numbers 0 to 20
// for (let i = 0; i <= 20; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

// 100, 90, ..., 0
// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

//Even nos from 1 to 20
// for (let i = 2; i <= 20; i += 2) {
//         console.log(i);
// }

//Iterating through array
// const animals = ['Lion', 'Tiger', 'Cheetah', 'Elephant', 'Cow', 'Gorilla', 'Leopard'];
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

//In reverse
// const animals = ['Lion', 'Tiger', 'Cheetah', 'Elephant', 'Cow', 'Gorilla', 'Leopard'];
// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i]);
// }

//Nested For Loop
// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j <= 3; j++) {
//         console.log(`    j is: ${j}`)
//     }
// }

//Seating Chart
const seatingChart = [
    ['Tony', 'Chris', 'Joe'],
    ['Virat', 'Mahi', 'Sachin', 'Ricky'],
    ['Olivia', 'Natalie', 'Emily', 'Ritz']
];

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`);
    for ( let j = 0; j < row.length; j++) {
        console.log(`   ${row[j]}`);
    }
}