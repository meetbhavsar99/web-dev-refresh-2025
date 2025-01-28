const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);
console.log(Math.max(nums));
console.log(Math.max(...nums));
console.log(nums);
console.log(...nums);
console.log(...'hello');


const cats = ['blue', 'scout', 'rocket'];
const dogs = ['rusty', 'wyatt'];

const allPets = [...cats, ...dogs];
console.log(allPets);


const feline = {legs: 4, family: 'Felidae'};
const canine = {isFurry: true, family: 'Caninae'};
const steele = {...feline, ...canine, family: 'Steele'};

console.log(steele);