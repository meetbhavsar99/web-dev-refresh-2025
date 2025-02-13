let jsonData = '{"climate": "Arid", "diameter": "10465", "gravity": "1 standard", "name": "Tatooine", "orbital_period": "304", "population": "200000", "rotation_period": "23", "surface_water": "1", "terrain": "Dessert", "url": "https://swapi.dev/api/planets/1/"}';

let parsedData = JSON.parse(jsonData);
console.log(parsedData);
let jsonStringify = JSON.stringify(parsedData);
console.log(jsonStringify);
