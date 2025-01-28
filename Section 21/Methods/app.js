const myMath = {
    PI: 3.14159,
    square: function(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
};

//this keyword
const cat = {
    name: 'Blue Stark',
    color: 'Grey',
    Breed: 'Scottish Fold',
    meow() {
        console.log('THIS IS:', this);
        console.log(`${this.name} says meoww`);
    }
}

const meow2 = cat.meow;