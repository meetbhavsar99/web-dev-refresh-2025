const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/productApp')
.then(() => {
    console.log("CONNECTION OPEN!");
})
.catch(err => {
    console.log("ERROR WHILE CONNECTING.")
})

const productSchema = new mongoose.Schema({
    //name: String, is a shorthand for the below code
    name: {
        type: String,
        maxLength: 20,
        required: true
    }, 
    price: {
        type: Number,
        min: [0, 'Price must be positive!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    category: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.greet = function () {
    console.log(`Hi there! I'm ${this.name}!`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.category.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('outdoors');
    console.log(foundProduct);
}

findProduct();  

Product.fireSale().then(res => console.log(res));

// const bike = new Product({name: 'Cycling Jersey', price: 29.50, category: ['Cycling'], size: 'XS'})
// bike.save()
// .then(m => console.log(`Saved bike : ${m}`))
// .catch(err => console.log(`Got an error : ${err}`))

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -199.50}, {new: true, runValidators: true})
// .then(m => console.log(`Saved bike : ${m}`))
// .catch(err => console.log(`Got an error : ${err}`))