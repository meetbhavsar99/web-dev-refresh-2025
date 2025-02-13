let req = new XMLHttpRequest();

req.onload = function () {
    console.log("LOADED!!");
    let parseData = JSON.parse(this.responseText);
    console.log(parseData.name, parseData.height);
}

req.onerror = function () {
    console.log("ERROR!!");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1");
req.send();