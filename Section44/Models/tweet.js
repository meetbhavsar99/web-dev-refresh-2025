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

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//   //   const user = new User({ username: 'fanboy99', age: 25 });
//   const user = await User.findOne({ username: 'fanboy99' });
//   const tweet2 = new Tweet({ text: 'Love it! Once More!', likes: 1124 });
//   tweet2.user = user;
//   //   user.save();
//   tweet2.save();
// };

// makeTweets();

const findTweet = async () => {
  const t = await Tweet.find().populate('user', 'username');
  console.log(t);
};

findTweet();
