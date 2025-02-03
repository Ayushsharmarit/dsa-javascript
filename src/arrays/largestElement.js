function findMaxForLoop(arr) {
  if (arr.length === 0) return null;
  let highestElement = arr[0];
  for (const element of arr) {
    if (element > highestElement) highestElement = element;
  }
  return highestElement;
}

// function findMaxReduce(arr){
//     return arr.length ? arr.reduce((max, num)=>( num > max ? num : max), arr[0]) : null
// }

// function findMaxMath(arr){
//     return arr.length ? Math.max(...arr) : null
// }

console.log(findMaxForLoop([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(findMaxForLoop([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(findMaxMath([1, 2, 3, 4, 5, 6, 7, 8, 9]));

module.exports = findMaxForLoop