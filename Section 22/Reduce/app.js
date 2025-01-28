const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for(let price of prices) {
//     total += price;
// }
// console.log(total);

const total = prices.reduce((total, price) => total + price);

const min = prices.reduce((min, price) => {
    if(price < min) {
        return price;
    }
    return min;
});

const movies = [
    {
        title: 'Alien',
        score: 90,
        year: 1979
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Zeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    }
];

const bestMovie = movies.reduce((bestRTMovie, currMovie) => {
    if(bestRTMovie.score < currMovie.score) {
        return currMovie;
    }
    return bestRTMovie;
})

//initail value
const evens = [2, 4, 6, 8];
const evTotal = evens.reduce((total, el) => {
    return total + el;
}, 100);