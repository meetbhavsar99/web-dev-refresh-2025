const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error :'));
db.once('open', () => {
  console.log('Database connected!');
});

const sample = (array) => array[Math.floor(Math.random() * array.length) + 1];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000) + 1;
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: '6839173b01ce1320e290c3af',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        'Consectetur duis ea aliqua anim. Do anim commodo eu minim commodo occaecat eiusmod pariatur enim dolore culpa mollit. Veniam laborum nisi tempor elit ex quis non elit reprehenderit ipsum dolore reprehenderit est. Pariatur ad excepteur adipisicing ea Lorem veniam proident ea consectetur. Id nostrud excepteur et eiusmod exercitation deserunt laborum mollit Lorem fugiat nisi ea. Duis cupidatat Lorem aliquip adipisicing aute tempor est aute ullamco nisi eu. Sit mollit laborum tempor nostrud adipisicing ipsum eiusmod officia id non elit amet sit irure reprehenderit. Eiusmod nostrud duis ipsum laboris elit irure irure quis quis qui nisi.',
      price,
      images: [
        {
          url: 'https://res.cloudinary.com/dddaibjn6/image/upload/v1749334461/YelpCamp/wamqzgi5zgh5gooievkh.jpg',
          filename: 'YelpCamp/wamqzgi5zgh5gooievkh',
        },
        {
          url: 'https://res.cloudinary.com/dddaibjn6/image/upload/v1749334462/YelpCamp/jdqsjmi9ekq9xiggr2dv.jpg',
          filename: 'YelpCamp/jdqsjmi9ekq9xiggr2dv',
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => mongoose.connection.close());
