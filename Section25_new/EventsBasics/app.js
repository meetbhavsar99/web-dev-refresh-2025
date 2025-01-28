let btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('You clicked the second button!');
}

function screamAlert () {
    console.log('YOU just TOUCHed me!');
    console.log('PLEASE STOP TOUCHing me!');
}

btn.onmouseenter = screamAlert;

document.querySelector('h1').onclick = () => alert('You clicked the h1!');

let btn3 = document.querySelector('#v3');

btn3.addEventListener('mousedown', () => {
    alert('CLICKED!');
})

function twist() {
    console.log('TWIST');
}
function shout() {
    console.log('SHOUT');
}

let tasBtn = document.querySelector('#tas');

// tasBtn.onclick = twist;
// tasBtn.onclick = shout;

tasBtn.addEventListener('click', twist, {once: true});
tasBtn.addEventListener('click', shout);