const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose
  .connect('mongodb://127.0.0.1:27017/relationshipDemo')
  .then(() => {
    console.log('CONNECTION OPEN!');
  })
  .catch((err) => {
    console.log('ERROR WHILE CONNECTING.');
    console.log(err);
  });

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ['Spring', 'Summer', 'Fall', 'Winter'],
  },
});

const Product = new mongoose.model('Product', productSchema);

// Product.insertMany([
//   { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//   { name: 'Sugar Baby Watermelon', price: 5.99, season: 'Summer' },
//   { name: 'Asparagus', price: 3.99, season: 'Spring' },
// ]);

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});
