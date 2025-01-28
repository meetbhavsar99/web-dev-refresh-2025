// const scores = [987654, 876543, 765432, 654321, 543210, 432109, 321098];

// const [gold, silver, bronze, ...everyoneElse] = scores;
// console.log(`GOLD: ${gold}`);
// console.log(`SILVER: ${silver}`);
// console.log(`BRONZE: ${bronze}`);
// console.log(`EVERYONEELSE: ${everyoneElse}`);


// const user = {
//     firstName: 'Matt',
//     lastName: 'Demon',
//     emailId: 'mattd@gmail.com',
//     born: 1000,
//     dead: 2000,
//     id: 123456,
//     phoneNumber: '987654',
//     city: 'Delhi',
//     state: 'UP'
// };

// // const firstName = user.firstName;
// const {firstName, lastName, email} = user;
// const {born: birthYear} = user;


// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }
// function fullName(user) {
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`;
// }
// function fullName({firstName, lastName}) {
//     return `${firstName} ${lastName}`;
// }

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

// movies.filter(movie => movie.score >= 90);
movies.filter(({score}) => score >= 90);