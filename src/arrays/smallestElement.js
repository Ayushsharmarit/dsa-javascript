function findMinForLoop(arr) {
  if (arr.length == 0) return null;
  let minimumElement = arr[0];
  for (const element of arr) {
    if (element < minimumElement) {
        minimumElement = element;
    }
  }
  return minimumElement;

}

function findMinReduce(arr) {
  return arr.length
    ? arr.reduce((min, num) => (num < min ? num : min), arr[0])
    : null;
}

function findMinMath(arr) {
    return arr.length
      ? Math.min(...arr)
      : null;
  }
console.log(findMinForLoop([3, 1, 4, 1, 5, 9, -2, 6, 5]))
// console.log(findMinReduce([1, 2, 3, 4, 5, 6, 0, -5, 7, 8, 9]));
// console.log(findMinReduce([]));
// console.log(findMinMath([1,2,3,4,5,0]));
// console.log(findMinMath([]));
// console.log(findMinForLoop([]))
 
module.exports = {
    findMinForLoop,
    findMinReduce,
    findMinMath
}