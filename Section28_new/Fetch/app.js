// fetch("https://swapi.tech/api/people/1")
//     .then(res => {
//         console.log("RESOLVED - ", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log("JSON DONE! ", data.result.properties);
//         return fetch("https://swapi.tech/api/people/2");
//     })
//     .then(res => {
//         console.log("SECOND REQUEST WAS RESOLVED - ", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log("JSON was DONE for the second request - ", data.result.properties);
//     })
//     .catch(e => {
//         console.log('ERROR - ', e);
//     })

let loadStarWarsPeople = async () => {
    try {
        let res = await fetch("https://swapi.tech/api/people/1");
        let data = await res.json();
        console.log(data.result.properties);
        let res2 = await fetch("https://swapi.tech/api/people/2");
        let data2 = await res2.json();
        console.log(data2.result.properties);
    } catch (e) {
        console.log("ERROR! - ", e);
    }
}
    

loadStarWarsPeople();