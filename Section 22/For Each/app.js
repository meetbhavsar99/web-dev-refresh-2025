// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// numbers.forEach(function (el) {
//     if (el % 2 ===0) {
//         console.log(el);
//     }
// });

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

movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});