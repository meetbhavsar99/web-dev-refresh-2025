// async function hello() {

// }

// let hello = async () => {
//     return 'Hello there!';
// }

// let hello = async () => {
//     //throw Error('Error is thrown!');
//     throw ('Error is thrown!');
//     return 'Hello there!';
// }

// hello()
//     .then(data => {
//         console.log('PROMISE resolved with: ', data)
//     })
//     .catch(err => {
//         console.log('PROMISE REJECTED with error: ', err);
//     })

// let login = async (username, password) => {
//     if(!username || !password) throw 'Missing credentials!';
//     if(password === 'pwd123') return 'WELCOME!';
//     throw 'Invalid credentials!';
// }

// login ('qwerty', 'pwd123')
//     .then(msg => {
//         console.log('LOGGED IN!', msg);
//     })
//     .catch(err => {
//         console.log('ERROR!', err);
//     })

// await
// let delayedColorChange = (newColor, delay, doNext) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = newColor;
//             doNext && doNext();
//             resolve();
//         }, delay);
//     })
// };

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000)
//                     })
//                 })
//             })
//         })
//     })
// })

// async function rainbow() {
//     await delayedColorChange('red', 1000);
//     await delayedColorChange('orange', 1000);
//     await delayedColorChange('yellow', 1000);
//     await delayedColorChange('green', 1000);
//     await delayedColorChange('blue', 1000);
//     await delayedColorChange('indigo', 1000);
//     await delayedColorChange('violet', 1000);
//     return 'ALL DONE';
// }

// rainbow().then(() => {console.log('END OF THE RAINBOW!')});

// async function showRainbow() {
//     await rainbow();
//     console.log('END OF RAINBOW!');
// }

// showRainbow();

let fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        let rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) {
                resolve('The REQUEST was resolved!');
            }
            reject('ERROR getting the requested data!');
        }, 2000)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1);
    } catch(e) {
        console.log('CAUGHT AN ERROR - ', e);
    }
}

makeTwoRequests();