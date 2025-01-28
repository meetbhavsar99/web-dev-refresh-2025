let prices = [1.49, 6.99, 3.5, 15.98, 61];

let total = prices.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(total);

let min = prices.reduce((min, price) => {
  // if (min < price) {
  //     min = min;
  // } else {
  //     min = price;
  // }
  // return min;

  // or
  if (price < min) return price;
  return min;
});

console.log(min);
