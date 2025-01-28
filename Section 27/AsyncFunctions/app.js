// async function hello() {

// }

// const sing = async () => {
//     throw 'OH NO, an error!';
//     return 'BLA BLA BLA';
// }

// sing()
//     .then(data => {
//         console.log('PROMISE RESOLVED WITH:', data);
//     })
//     .catch(err => {
//         console.log('PROMISE REJECTED WITH:', err);
//     })

// const login = async (username, password) => {
//     if (!username || !password) throw 'MISSING CREDENTAILS!';
//     if (password === 'corgifeetarecute') return 'WELCOME, USER!';
//     throw 'INVALID PASSWORD and/or USERNAME';
// };

// login('asdasd', 'corgifeetarecute')
// .then(msg => {
//     console.log('LOGGED IN');
//     console.log(msg);
// })
// .catch(err => {
//     console.log('ERROR!');
//     console.log(err);
// })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('purple', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow () {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('purple', 1000)
    await delayedColorChange('violet', 1000)
    return 'ALL DONE!'
}

// rainbow().then(() => console.log('THERE YOU GO, YOUR RAINBOW'));

async function printRainbow() {
    await rainbow();
    console.log('THERE YOU GO, YOUR RAINBOW');
}

printRainbow();