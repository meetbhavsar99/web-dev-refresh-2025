//old way
// let rollDie = (numSides) => {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

//new way
// let rollDie = (numSides = 6) => {
//     return Math.floor(Math.random() * numSides) + 1;
// }

// let greet = (person, msg = "Hey there", punc = ".") => {
//     console.log(`${msg}, ${person}${punc}`);
// }

//spread
// let nums = [1, 2, 4, 4, 56, 7, 43, 3, 35,65];
// let max = Math.max(...nums);
// console.log(max);

// let cats = ['kitty', 'blue', 'killer'];
// let dogs = ['rusty', 'wyatt'];

// let allPets = [...cats, ...dogs];
// console.log(allPets);

// let cat = { color: 'Black', catName: 'Kitty'};
// let dog = { color: 'White', dogName: 'Blue'};

// let catDog = {...cat, ...dog};
// console.log(catDog);

// let arrObj = {...[1, 2, 3, 4]};
// console.log(arrObj)

//rest
// let sum = (...nums) => {
//     console.log(nums);
// }

// function sum(...nums) {
//     return nums.reduce((total, num) => total + num);
// }

//destructuring
//array d
// let array = ['Frances', 'Vanessa', 'Abigail'];
// // let [fav, secFav, thrFav] = array;
// let [fav, ...rest] = array;

//object d
let user = {
    first: "Frances",
    last: "Bentley",
    email: "fb@email.com"
}

// let {email} = user;
// renaming it
// let { first: firstName, famousFor = 'those things' } = user;

//params d
// function fullName (user) {
//     return `${user.first} ${user.last}`
// }

// OR
// function fullName (user) {
//     let {first, last} = user;
//     return `${first} ${last}`;
// }

function fullName ({first, last}) {
    return `${first} ${last}`;
}
