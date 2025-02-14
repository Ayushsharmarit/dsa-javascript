// 5. Convert an array of numbers into a formatted currency string
// Given an array of numbers representing prices, convert them into a comma-separated currency string.

//output==>  "₹10, ₹25, ₹50, ₹75, ₹100"

const prices = [10, 25, 50, 75, 100];

function convert(arr) {
  let formattedArray =  arr.reduce((acc, item) => {
    acc.push(`$${item}`);
    return acc;
  }, []);
  return formattedArray.join(', ')
}

console.log(convert(prices))