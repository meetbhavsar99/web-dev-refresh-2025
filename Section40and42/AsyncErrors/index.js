const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
.then(() => console.log('Ready to connect to the Mongo...'))
.catch(err => console.log(`Error connecting to the Mongo... : ${err}`));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy', 'fungi'];

function wrapAsync(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}

app.get('/products', wrapAsync(async (req, res, next) => {
        const { category }= req.query;
        if(category) {
            const products = await Product.find({ category });
            res.render('products/index', { products, category })
        } else {
            const products = await Product.find({});
            res.render('products/index', { products, category: 'All' })
        }
}))

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})

app.post('/products', wrapAsync(async (req, res, next) => {
        const newProduct = new Product(req.body);
        await newProduct.save();
        console.log(newProduct);
        res.redirect(`/products/${newProduct._id}`);    
}))

app.get('/products/:id', wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product) {
            throw new AppError('Product Not Found!', 404);
        }
        console.log(product);
        res.render('products/show', { product })
}))

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product) {
            return new AppError('Product Not Found!', 404);
        }
        res.render('products/edit', { product, categories });
}))

app.put('/products/:id', wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true});
        res.redirect(`/products/${product._id}`);
}))

app.delete('/products/:id', wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        console.log(`The product ${deletedProduct.name} was deleted!`);
        res.redirect('/products');
}));

const handleValidationError = err => {
    console.dir(err);
    return new AppError(`Validation Failed... ${err.message}`, 400);
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === 'ValidationError') err = handleValidationError(err);
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('Listening on the port 3000...');
})