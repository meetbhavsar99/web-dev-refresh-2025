// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallback('books.com/page1', (response) => {
//     console.log('IT WORKED!');
//     console.log(response);
//     fakeRequestCallback('book.com/page2', (response) => {
//         console.log('IT WORKED AGAIN!');
//         console.log(response);
//         fakeRequestCallback('book.com/page3', (response) => {
//             console.log('IT WORKED AGAIN (3rd try)!');
//             console.log(response);
//         }, (e) => {
//             console.log('ERROR (3rd req)', e)
//         })
//     }, (e) => {
//         console.log('ERROR (2nd req)', e)
//     })
// }, (e) => {
//     console.log('ERROR!', e);
// })

// let request = fakeRequestPromise('yelp.com/api/coffee/page1');
// request
//     .then(() => {
//         console.log('IT WORKED!');
//         let request2 = fakeRequestPromise('yelp.com/api/coffee/page2');
//         request2
//             .then(() => {
//                 console.log('IT WORKED AGAIN!');
//             })
//             .catch(() => {
//                 console.log('ERROR in 2nd try');
//             })
//     })
//         .catch(() => {
//         console.log('ERROR!');
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('IT WORKED (page1)')
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log('IT WORKED (page2)')
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log('IT WORKED (page3)')
    })
    .catch(() => {
        console.log('REQUEST FAILED!!!')
    })