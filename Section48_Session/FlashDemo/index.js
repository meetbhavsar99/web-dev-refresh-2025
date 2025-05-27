const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const Farm = require('./models/farm');
const flash = require('connect-flash');

const sessionOptions = {
  secret: 'thisisnotagoodsecret',
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(flash());

mongoose
  .connect('mongodb://127.0.0.1:27017/FlashApp')
  .then(() => console.log('Ready to connect to the Mongo...'))
  .catch((err) => console.log(`Error connecting to the Mongo... : ${err}`));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//FARM ROUTES
app.use((req, res, next) => {
  res.locals.messages = req.flash('success');
  next();
});

app.get('/farms', async (req, res) => {
  const farms = await Farm.find({});
  res.render('farms/index', { farms });
});

app.get('/farms/new', (req, res) => {
  res.render('farms/new');
});

app.get('/farms/:id', async (req, res) => {
  const farm = await Farm.findById(req.params.id);
  res.render('farms/show', { farm });
});

app.delete('/farms/:id', async (req, res) => {
  console.log('Deleting...');
  const farm = await Farm.findByIdAndDelete(req.params.id);
  res.redirect('/farms');
});

app.post('/farms', async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  req.flash('success', 'Successfully made a new farm!');
  res.redirect('/farms');
});

app.listen(3000, () => {
  console.log('Listening on the port 3000...');
});
