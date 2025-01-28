// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('#container');
let baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// let newImg = document.createElement('img');
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
// container.appendChild(newImg);

for (let i = 1; i < 1026; i++) {
    let pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    // let label = document.createElement('span');
    // label.innerText = `#${i}`;
    // container.appendChild(label);
    let newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i}.png`;

    pokemon.appendChild(newImg);
    //pokemon.appendChild(label);
    container.appendChild(pokemon);
}