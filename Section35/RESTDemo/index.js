const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const comments = [
    {
        username: 'todd',
        comment: 'I am todd, and that is what I do'
    },
    {
        username: 'stella',
        comment: 'So, I break-up with people instanteously.'
    },
    {
        username: 'jason',
        comment: 'I am bravo team leader, and I take care of everybody.'
    },
    {
        username: 'clay',
        comment: 'I am clay, and I am one of the people whom Stella was talking about!'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({username, comment}); 
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response...");
})

app.post('/tacos', (req, res) => {
    const { type, qty } = req.body;
    console.log(req.body);
    res.send(`Okay, so here is your ${qty} ${type} taco(s)`)
})

app.listen(3000, () => {
    console.log("Listening on the port 3000...");
})