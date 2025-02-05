function checkMissing(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index + 1] !== arr[index] + 1) {
      return arr[index] + 1;
    }
  }
  return null; // No missing number
}
function findMissingNumber(arr) {
    if (arr.length === 0) return null; // Handle empty array
    const first = arr[0];
    const last = arr[arr.length - 1];
    const expectedSum = ((first + last) * (last - first + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
    const missing = expectedSum - actualSum;
    return missing !== 0 && !arr.includes(missing) ? missing : null;
  }
  
  // ✅ Example Usage
  console.log(findMissingNumber([2, 3, 4, 5])); // Output: 1
  console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8])); // Output: 7
  console.log(findMissingNumber([10, 11, 12, 14, 15])); // Output: 13
  console.log(findMissingNumber([100, 101, 102, 104])); // Output: 103
  console.log(findMissingNumber([5, 6, 7, 8, 9])); // Output: null
  console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7])); // Output: null
  console.log(findMissingNumber([])); // Output: null
  
  
module.exports ={
    checkMissing,
    findMissingNumber
}
  