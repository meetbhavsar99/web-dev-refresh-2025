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

// fakeRequestCallback('books.com/page1', 
//     function(response) {
//         console.log('IT WORKED!');
//         console.log(response);
//         fakeRequestCallback('books.com/page2',
//         function(response) {
//             console.log('IT WORKED AGAIN!! (2nd req)');
//             console.log(response);
//             fakeRequestCallback('books.com/page3',
//             function(response) {
//                 console.log('IT WORKED AGAIN! (3rd req)');
//                 console.log(response);
//             },
//             function(err) {
//                 console.log('ERROR!!! (3rd req)', err);
//             });
//         },
//         function(err) {
//             console.log('ERROR!!! (2nd req)', err);
//         });
        
//     }, function(err) {
//         console.log('ERROR!!!', err);
//     });

// fakeRequestPromise('yelp.com/api/coffee1')
//     .then(() => {
//         console.log('IT WORKED! (Page 1)');
//         fakeRequestPromise('yelp.com/api/coffee2')
//         .then(() => {
//             console.log('IT WORKED! (Page 2)');
//             fakeRequestPromise('yelp.com/api/coffee3')
//             .then(() => {
//                 console.log('IT WORKED! (Page 3)');
//             })
//             .catch(() => {
//                 console.log('OH NO...ERROR! (Page 3)');
//             })
//         })
//         .catch(() => {
//             console.log('OH NO...ERROR! (Page 2)');
//         })
//     })
//     .catch(() => {
//         console.log('OH NO...ERROR!');
//     });

fakeRequestPromise('yelp.com/api/coffee1')
.then((data) => {
    console.log('IT WORKED! (Page 1)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api/coffee2');
})
.then((data) => {
    console.log('IT WORKED! (Page 2)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api/coffee3');
})
.then((data) => {
    console.log('IT WORKED! (Page 3)');
    console.log(data);
})
.catch((err) => {
    console.log(err);
    console.log('ERROR! YOUR REQUEST REJECTED!');
})


