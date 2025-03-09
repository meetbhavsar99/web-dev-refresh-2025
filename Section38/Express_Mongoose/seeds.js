const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(() => console.log('Ready to connect to the Mongo...'))
.catch(err => console.log(`Error connecting to the Mongo... : ${err}`));

// const p = new Product({
//     name: 'Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(() => console.log(p))
// .catch(err => console.log(err))

const seedProducts = [
    {
        name: 'Celery stalks',
        price: 2.49,
        category: 'vegetable'
    },
    {
        name: 'Gala Apples',
        price: 0.89,
        category: 'fruit'
    },
    {
        name: 'Indian eggplant',
        price: 4.49,
        category: 'vegetable'
    },
    {
        name: 'Banana',
        price: 0.49,
        category: 'fruit'
    },
    {
        name: 'Almond chocolate',
        price: 1.49,
        category: 'dairy'
    },
];

Product.insertMany(seedProducts)
.then(res => console.log(res))
.catch(err => console.log(err))