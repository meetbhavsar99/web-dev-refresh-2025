const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');


app.use(morgan('dev'));

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
    //res.send('Please enter a correct password!');
    // res.status(401);
    // throw new Error('Password required!');
    throw new AppError('Password required!', 401);
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


app.get('/admin', (req, res) => {
    throw new AppError('Stop acting as an admin. YOU ARE NOT!', 403);
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!!');
});

// app.use((err, req, res, next) => {
//     console.log('***************************');
//     console.log('***********ERROR***********');
//     console.log('***************************');
//     next(err);
//     // res.status(500).send('Sorry! Encountered an ERROR! TRY AGAIN in some time!');
// });

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).send(`${message}, with status code: ${status}`);
})

app.listen(3000, () => {
    console.log("Listening on the port 3000...");
})