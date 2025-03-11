const express = require('express');
const app = express();
const morgan = require('morgan');

//app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS!!');
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if(password === 'bellabby') {
        next();
    }
    res.send('Please enter a correct password!');
};

// app.use((req, res, next) => {
//     console.log('the first middleware...');
//     return next();
//     console.log('middleware after calling the next first time...')
// });
// app.use((req, res, next) => {
//     console.log('second middleware...');
//     return next();
// })

app.get('/', (req, res) => {
    console.log(`Request time: ${req.requestTime}`);
    res.send('Home Page!');
});

app.get('/dogs', (req, res) => {
    console.log(`Request time: ${req.requestTime}`);
    res.send('WOOF WOOF!');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send("That's her! 😍🤤");
}); 

app.use((req, res) => {
    res.status(404).send('NOT FOUND!!');
})

app.listen(3000, () => {
    console.log("Listening on the port 3000...");
})