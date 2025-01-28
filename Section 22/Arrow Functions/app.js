// const add = function(x, y) {
//     return x + y;
// };

// const add = (x, y) => {
//     return x + y;
// };

// const square = x => {
//     return x * x;
// };

// const rollDie = () => {
//     return Math.ceil(Math.random() * 6);
// };

// Implicit Return
// const rollDie = () => (
//     Math.ceil(Math.random() * 6)
// );

// const add = (x, y) => x + y;

const movies = [
{
    title: 'Alien',
    score: 90
},
{
    title: 'Zeus',
    score: 99
},
{
    title: 'Parasite',
    score: 95
},
{
    title: 'Stand by me',
    score: 85
}
];

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`;
// });

const newMovies = movies.map( movie => (
    `${movie.title} - ${movie.score / 10}`
));