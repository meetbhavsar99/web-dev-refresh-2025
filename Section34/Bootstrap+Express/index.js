const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Stephanie', 'Winston', 'Chris', 'Maya'
    ];
    res.render('cats', { cats });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    //res.render('random', { num: num});x
    res.render('random', { num });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    
    const subredditData = redditData[subreddit];
    console.log(subredditData);
    if(subredditData) {
        res.render('subreddit', { ...subredditData });
    } else {
        res.render('notfound', { subreddit })
    }

})

app.listen(3000, () => {
    console.log("Listening on the port 3000...");
})