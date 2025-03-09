const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
    console.log("CONNECTION OPEN!");
})
.catch(err => {
    console.log("ERROR WHILE CONNECTING.")
})


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema); //class
// const amadeus = new Movie({title: 'Amadeus', year: 1996, score: 9.6, rating: 'R'}); //instance of movie class

Movie.insertMany(
    {title: 'Iron Man 1', year: 2010, score: 9.6, rating: 'R'},
    {title: 'Thor 2', year: 2015, score: 9.2, rating: 'PG'},
    {title: 'Avengers: Cap vs Iron man', year: 2017, score: 9.7, rating: 'S'},
    {title: 'Daredevil', year: 2025, score: 8.6, rating: 'PG-13'},
    {title: 'NSFW', year: 1996, score: 9.6, rating: 'R'},
)
.then((data) => {
    console.log(`It worked: ${data}`);
})

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error...'));
// db.once('open', function () {
//     console.log('connected successfully...');
// })