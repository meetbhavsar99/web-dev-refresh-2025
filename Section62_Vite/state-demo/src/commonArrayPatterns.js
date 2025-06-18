const shoppingCart = [
  { id: 1, product: "HDMI Cable", price: 4 },
  { id: 2, product: "Pen drive", price: 20 },
  { id: 3, product: "Hard Disk", price: 90 },
];

// Adding to an array
[...shoppingCart, { id: 4, product: "USB Hub", price: 10 }];

//removing an element
shoppingCart.filter((item) => item.id != 2);

//updating all elements in a array
shoppingCart.map((item) => {
  return {
    ...item,
    item: item.product.toLowerCase(),
  };
});

// modifying a particular element in an array
shoppingCart.map((item) => {
  if (item.id === 3) {
    return { ...item, price: 4.99 };
  } else {
    return item;
  }
});
