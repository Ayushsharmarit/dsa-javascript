// function reverseArray(arr) {
//     if (!Array.isArray(arr)) {
//       throw new TypeError('Input must be an array');
//     }
  
//     const reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArray.push(arr[i]);
//     }
  
//     return reversedArray;
//   }
  
//   module.exports = reverseArray;

  // without using extra space for array
  function reverseArray(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Input must be an array');
    }
  
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  
    return arr; // This modifies the original array
  }
  
  module.exports = reverseArray;
  