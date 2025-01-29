let scoreOne = document.querySelector('#scoreOne');
let scoreTwo = document.querySelector('#scoreTwo');
let btnOne = document.querySelector('#buttonOne');
let btnTwo = document.querySelector('#buttonTwo');
let players = document.querySelector('#players');
let reset = document.querySelector('#reset');

let score1 = 0;
let score2 = 0;
let limit = 5;


players.addEventListener('input', function () {
    limit = players.value;
    resetFunc();
})

btnOne.addEventListener('click', function () {
    ++score1;
    scoreOne.innerText = score1;
    if(score1 == players.value) {
        btnOne.disabled = 'true';
        btnTwo.disabled = 'true';

        scoreOne.style.color = '#008000';
        scoreTwo.style.color = '#e5383b';
    }
})
btnTwo.addEventListener('click', function () {
    scoreTwo.innerText = ++score2;
    if(score2 == players.value) {
        btnOne.disabled = true;
        btnTwo.disabled = true;

        scoreTwo.style.color = '#008000';
        scoreOne.style.color = '#e5383b';
    }
})

if(score1 === '5' || score2 === 5) {
    btnOne.disabled = true;
    btnTwo.disabled = true;
}

let resetFunc = () => {
    scoreOne.innerText = 0;
    score1 = 0;
    scoreOne.style.color = 'black';
    btnOne.disabled = false;

    scoreTwo.innerText = 0;
    score2 = 0;
    scoreTwo.style.color = 'black';
    btnTwo.disabled = false;
}

reset.addEventListener('click', resetFunc);


