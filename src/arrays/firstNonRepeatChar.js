function checkFirstNonRepeatChar(arr) {
  let obj = {};
  for (const element of arr) {
    obj[element] = (obj[element] || 0) + 1;
  }
  for (const element of arr) {
    if (obj[element] === 1) return element; // Return as number
  }

  return null;
}

console.log(checkFirstNonRepeatChar([1, 2, 3, 4, 5, 1, 2, 5]));
console.log(checkFirstNonRepeatChar([1, 2, 3, 4, 5, 1, 2, 5])); // Output: 3
console.log(checkFirstNonRepeatChar([4, 5, 1, 2, 0, 4])); // Output: 5
console.log(checkFirstNonRepeatChar([1, 1, 2, 2, 3, 3, 4])); // Output: 4
console.log(checkFirstNonRepeatChar([7, 7, 7, 7])); // Output: null
module.exports = {
  checkFirstNonRepeatChar,
};
