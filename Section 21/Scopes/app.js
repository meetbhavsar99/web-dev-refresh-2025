// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

//Block Scope
// let radius = 8;
// if (radius > 8) {
//     const PI = 3.14159;
//     let msg = 'HIII!';
// }
// console.log(radius);
// console.log(msg);

// for(var i = 0; i < 5; i++) {
//     var msg = 'asdfgh';
//     console.log(msg);
// }
// console.log(msg);
// console.log(i);

//Lexical Scope
function bankRobbery() {
    const heroes = ['Spiderman', 'Iron Fist', 'Batwoman', 'Catwoman'];
    function cryForHelp() {
        function inner() {
            for(let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}