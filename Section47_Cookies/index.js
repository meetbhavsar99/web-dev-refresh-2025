const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
  const { name = 'No-name' } = req.cookies;
  res.send(`Hey there, ${name}!`);
});

app.get('/setname', (req, res) => {
  res.cookie('name', 'Bella');
  res.send('SENT YOU A COOKIE...');
});

app.get('/getsignedcookie', (req, res) => {
  res.cookie('wanted', 'yes', { signed: true });
  res.send('SIGNED YOUR COOKIE...');
});

app.get('/verifycookie', (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
