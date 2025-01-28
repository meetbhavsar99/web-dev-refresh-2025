const multiply = (n, m) => {
    return n * m;
}

const square = (x) => {
    return multiply(x, x);
}

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}

console.log('Before...');
isRightTriangle(3, 4, 5);
console.log('After...');