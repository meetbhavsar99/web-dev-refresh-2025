let form = document.querySelector("#form");
// let tweets = document.querySelector('#tweets');
// let username = document.querySelector('#username');
let tweet = document.querySelector('#tweet');
let ul = document.querySelector('#tweets');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(username && tweet) {
        let user = this.elements.username.value;
        let twt = this.elements.tweet.value;
        // let user = username.value;
        // let twt = tweet.value;

        addTweet(user, twt);

        
        username.value = '';
        tweet.value = '';
    }
})

let addTweet = (user, twt) => {
    let newLi = document.createElement('li');
    let bTag = document.createElement('strong');
    bTag.append(user);
    newLi.append(bTag);
    newLi.append(` tweeted: ${twt}`);
    ul.append(newLi);
}