const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/productApp')
.then(() => {
    console.log("CONNECTION OPEN!");
})
.catch(err => {
    console.log("ERROR WHILE CONNECTING.")
})

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
})

personSchema.pre('save', async function () {
    console.log('About to save...');
});

personSchema.post('save', async function() {
    console.log('Just saved!');
});

const Person = mongoose.model('Person', personSchema);

