const req = new XMLHttpRequest();

req.onload = function() {
    console.log('IT IS LOADED!');
    const data = JSON.parse(this.responseText);
    console.log(data.name, data.height);
}
req.onerror = function() {
    console.log('ERROR OCCURED!');
    console.log(this);
}

req.open('GET', 'https://swapi.dev/api/people/1/');
req.send();