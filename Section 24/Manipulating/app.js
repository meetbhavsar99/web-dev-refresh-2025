const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!';
// } 

for (let link of allLinks) {
    link.style.color = 'cyan';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}