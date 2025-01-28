// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube(num) { // This is a shorthand way of writing a method in an object
//         return num ** 3;
//     }
// }

// this keyword
// let cat = {
//     name: 'Blue Steele',
//     color: 'Grey',
//     breed: 'Scottish Fold',
//     meow() {
//         console.log(`THIS IS: , ${this}`);
//         //  the first console.log statement converts the object to a string before printing, resulting in [object Object], while the second console.log statement prints the actual object in a more readable format.
//         console.log(`THIS IS: `, this);
//         console.log(`${this.name} says MEOWWW`);
//     }
// }

//try and catch
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("Error!");
// }

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please pass a valid string");
    }
}