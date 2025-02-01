let multiply = (x, y) => x * y;
let square = x => multiply(x, x);

let isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}