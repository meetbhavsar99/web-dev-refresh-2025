// function hex(r, g, b) {
//     return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1) ;
// }

// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`;
// }

// function makeColor(r, g, b) {
//     let color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         let {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     color.hex = function() {
//         let {r, g, b} = this;
//         return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1) ;
//     }
//     return color;
// }

// let firstColor = makeColor(35, 75, 200);

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function() {
//     let {r, g, b} = this;
//     return `rgb(${r}, ${g}, ${b})`;    
// }

// Color.prototype.hex = function() {
//     let {r, g, b} = this;
//     return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1) ;
// }

// Color.prototype.rgba = function(a=1.0) {
//     let {r, g, b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//         this.calcHSL();
//     }
//     innerRGB() {
//         let {r, g, b} = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     rgb() {
//         return `rgb(${this.innerRGB()})`;
//     }
//     rgba(a=1.0) {
//         return `rgb(${this.innerRGB()}, ${a})`;
//     }
//     hex() {
//         let {r, g, b} = this;
//         return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1) ;
//     }
//     hsl() {
//         let {h, s, l} = this;
//         return `hsl(${h}, ${s}%, ${l}%)`;
//     }
//     fullSaturation() {
//         let {h, s, l} = this;
//         return `hsl(${h}, 100%, ${l}%)`;
//     }
//     opposite() {
//         let {h, s, l} = this;
//         let newHue = (h + 180) % 360;
//         return `hsl(${newHue}, ${s}%, ${l}%)`;
//     }
//     calcHSL() {
//         let { r, g, b } = this;
//         // Make r, g, and b fractions of 1
//         r /= 255;
//         g /= 255;
//         b /= 255;
    
//         // Find greatest and smallest channel values
//         let cmin = Math.min(r, g, b),
//             cmax = Math.max(r, g, b),
//             delta = cmax - cmin,
//             h = 0,
//             s = 0,
//             l = 0;
//         if (delta == 0) h = 0;
//         else if (cmax == r)
//             // Red is max
//             h = ((g - b) / delta) % 6;
//         else if (cmax == g)
//             // Green is max
//             h = (b - r) / delta + 2;
//         else
//             // Blue is max
//             h = (r - g) / delta + 4;
    
//         h = Math.round(h * 60);
    
//         // Make negative hues positive behind 360°
//         if (h < 0) h += 360;
//         // Calculate lightness
//         l = (cmax + cmin) / 2;
    
//         // Calculate saturation
//         s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
//         // Multiply l and s by 100
//         s = +(s * 100).toFixed(1);
//         l = +(l * 100).toFixed(1);
//         this.h = h;
//         this.s = s;
//         this.l = l;
//     }
// }

// let red = new Color(255, 67, 89, 'tomato');
// let white = new Color(255, 255, 255, 'white');

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return `MEOWW!`;
    }
}

class Dog extends Pet { 
    bark() {
        return `WOOOF!`;
    }
    eat() {
        return `${this.name} is not eating!`;
    }
}