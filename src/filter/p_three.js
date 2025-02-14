const products = [
  { name: 'Laptop', price: 1500 },
  { name: 'Mouse', price: 500 },
  { name: 'Keyboard', price: 700 },
  { name: 'Monitor', price: 1200 },
];
// Output: [450, 630]  // (10% discount on 500 and 700)

//   Given an array of products, filter out items above ₹1000, then apply a 10% discount to the remaining items.

function filterItems(products) {
  return products
    .filter((item) => item.price < 1000)
    .map((item) => {
      return item.price - (item.price * 10) / 100
    });
}

console.log(filterItems(products));
