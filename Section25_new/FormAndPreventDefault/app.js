let form = document.querySelector('form');
let input = document.querySelector('#catName');
let cats = document.querySelector('#cats');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(catName) {
        let catName = input.value;
        let li = document.createElement('li');
        li.innerText = catName;
        cats.append(li);
        input.value = '';
    }
    
})