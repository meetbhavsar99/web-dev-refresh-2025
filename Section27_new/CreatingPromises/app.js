// new Promise((resolve, reject) => {
//     //reject();
// })

// let fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         let rand = Math.random();
//         setTimeout(() => {
//             if(rand < 0.7) {
//                 resolve('The REQUEST was resolved!');
//             }
//             reject('ERROR getting the requested data!');
//         }, 2000)
//     })
// }

// fakeRequest('dogs/api')
// .then((data) => {
//     console.log('YOUR FAKE DATA HAS BEEN GATHERED! :', data);
// })
// .catch((err) => {
//     console.log(err)
// })


let delayColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayColorChange('red', 1000)
    .then(() => delayColorChange('orange', 1000))
    .then(() => delayColorChange('yellow', 1000))
    .then(() => delayColorChange('green', 1000))
    .then(() => delayColorChange('blue', 1000))
    .then(() => delayColorChange('indigo', 1000))
    .then(() => delayColorChange('violet', 1000))
