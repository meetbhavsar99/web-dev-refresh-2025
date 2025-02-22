const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let comments = [
    {
        id: uuid(),
        username: 'todd',
        comment: 'I am todd, and that is what I do'
    },
    {
        id: uuid(),
        username: 'stella',
        comment: 'So, I break-up with people instanteously.'
    },
    {
        id: uuid(),
        username: 'jason',
        comment: 'I am bravo team leader, and I take care of everybody.'
    },
    {
        id: uuid(),
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
    comments.push({username, comment, id: uuid()}); 
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
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