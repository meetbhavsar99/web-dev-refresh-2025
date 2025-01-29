let input = document.querySelector('input');
let h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})
// input.addEventListener('change', function (e) {
//     console.log('CHANGED!');
// })