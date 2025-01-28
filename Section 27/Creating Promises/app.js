const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random < 0.7) {
                resolve('HERE IS YOUR FAKE DATA!');
            }
            reject('ERROR! REQUEST REJECTED!');
        }, 1000)
    });
};

fakeRequest('/dogs/rock')
    .then((data) => {
        console.log('YOUR REQUEST: ', data);
    })
    .catch((err) => {
        console.log('OH NO! ', err);
    })


    // const delayedColorChange = (newColor, delay, doNext) => {
    //     setTimeout(() => {
    //         document.body.style.backgroundColor = newColor;
    //         doNext && doNext();
    //     }, delay);
    // };
    
    // delayedColorChange('red', 1000, () => {
    //     delayedColorChange('orange', 1000, () => {
    //         delayedColorChange('yellow', 1000, () => {
    //             delayedColorChange('green', 1000, () => {
    //                 delayedColorChange('blue', 1000, () => {
    //                     delayedColorChange('indigo', 1000, () => {
    //                         delayedColorChange('violet', 1000);
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // });

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('purple', 1000))
    .then(() => delayedColorChange('violet', 1000))