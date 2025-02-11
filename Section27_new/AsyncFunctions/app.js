// async function hello() {

// }

// let hello = async () => {
//     return 'Hello there!';
// }

let hello = async () => {
    //throw Error('Error is thrown!');
    throw ('Error is thrown!');
    return 'Hello there!';
}

hello()
    .then(data => {
        console.log('PROMISE resolved with: ', data)
    })
    .catch(err => {
        console.log('PROMISE REJECTED with error: ', err);
    })