const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function print(num) {
//     console.log(num);
// }

// numbers.forEach(function (num) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// });

const movies = [
    {
        name: "movie1",
        rating: 90
    },
    {
        name: "movie2",
        rating: 95
    },
    {
        name: "movie3",
        rating: 80
    },
    {
        name: "movie4",
        rating: 70
    },
]

// movies.forEach(function (movie) {
//     console.log(`${movie["name"]}: Rating: ${movie["rating"]}/100`);
//     console.log(movie);
// })

//using arrow func
// movies.forEach((movie) => {
//     console.log(`${movie["name"]}: Rating: ${movie["rating"] / 10}`);
// })

// const newMovies = movies.forEach(movie => (
//     `${movie["name"]}: Rating: ${movie["rating"] / 10}`
// ))

//map
// const doubles = numbers.map(function(num) {
//     return num * 2;
// })
// console.log(doubles);

// const moviesName = movies.map(function(movie) {
//     return movie["name"];
// });
// console.log(moviesName);

// let goodMovies = movies.filter(movie => {
//     return movie.rating > 80;
// })

// let goodTitle = movies
//                 .filter(movie => movie.rating > 80)
//                 .map(movie => movie.name);

// let checkEvery = movies.every(movie => movie.rating > 70);
// console.log(checkEvery);

let checkSome = movies.some(movie => movie.rating > 80);
console.log(checkSome);