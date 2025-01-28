const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

const div = document.querySelector('#container');
const button = document.querySelector('#changeColor');

button.addEventListener('click', (e) => {
        container.style.backgroundColor = makeRandomColor();
        e.stopPropagation();
    });

container.addEventListener('click', function() {
    container.classList.toggle('hide');
});