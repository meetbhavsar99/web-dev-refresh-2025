// axios
//     .get("https://swapi.tech/api/people/1")
//     .then(res => {
//         console.log(res);
//     })
//     .catch(e => {
//         console.log("ERROR - ", e);
//     })

// let loadStarWarsPeople = async (id) => {
//     try {
//         let res = await axios.get(`https://swapi.tech/api/people/${id}`);
//         console.log(res.data.result.properties);
//     }
//     catch (e) {
//         console.log("ERROR - ", e);
//     }
// }

// loadStarWarsPeople(7);
// loadStarWarsPeople(4);
// loadStarWarsPeople(10);


let button = document.querySelector("button");
let ul = document.querySelector("ul");

let getDadJoke = async () => {
    let config = {headers: { Accept: 'application/json',}};
    let res = await axios.get('https://icanhazdadjoke.com/', config);
    let li = document.createElement('li');
    li.innerText = res.data.joke;
    ul.append(li);
    //console.log(res.data.joke);
}

button.addEventListener('click', function () {
    return getDadJoke();
});

//getDadJoke();