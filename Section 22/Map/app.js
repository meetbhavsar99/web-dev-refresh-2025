// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const doubles = numbers.map(function(num) {
//     return num * 2;
// });
// console.log(doubles);

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

const titles = movies.map(function(movie) {
    return movie.title.toUpperCase();
});
console.log(titles);
