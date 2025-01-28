function randomColor() {
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);
    let color = `rgb(${num1}, ${num2}, ${num3})`;
    let body = document.querySelector('body');
    let h1 = document.querySelector('h1');

    // Calculate relative luminance
    const luminance = (0.299 * num1 + 0.587 * num2 + 0.114 * num3) / 255;

    body.style.backgroundColor = color;
    h1.innerText = color;
    
    // If luminance is less than 0.5, use white text, otherwise use black
    h1.style.color = luminance < 0.5 ? 'white' : 'black';
};

let btn = document.querySelector('#btn');
btn.addEventListener('click', randomColor);