const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!");
//     res.send('<h1>This is the Response to your Request</h1>');
// })

app.get('/', (req, res) => {
    res.send("This is the home page!");
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit...</h1>`);
})

app.get('/r/:subreddit/comments/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the comments of the post Id - ${postId} on the ${subreddit} subreddit...</h1>`);
})

app.get('/cats', (req, res) => {
   res.send("MEOW...");
})

app.post('/cats', (req, res) => {
    res.send("This is the post request for /cats...");
})

app.get('/dogs', (req, res) => {
    res.send("WOOF...");
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q) {
        res.send("NOTHING FOUND IF NOTHING SEARCHED...");
    }
    res.end(`Search result for ${q}...`);
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`);
})

app.listen(3000, () => {
    console.log("Listening on the port 3000...");       
})