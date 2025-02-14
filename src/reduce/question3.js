// 1. Find the longest word in an array
// Write a function that returns the longest word from an array of strings.

//output==> watermelon

const words = ['apple', 'banana', 'watermelon', 'orange', 'kiwi'];

function check(arr) {
  return arr.reduce((acc, item) => {
    if (item.length > acc.length) {
      acc = item;
    }
    return acc;
  }, '');
}
console.log(check(words));
