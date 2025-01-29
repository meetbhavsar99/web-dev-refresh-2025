let btn = document.querySelector('#btn');
let div = document.querySelector('#container');

btn.addEventListener('click', function(e) {
    div.style.backgroundColor = makeRandColor();
    e.stopPropagation();
});

let makeRandColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

div.addEventListener('click', function() {
    div.classList.toggle('hide');
})