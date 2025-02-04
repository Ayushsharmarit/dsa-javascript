function secondLargestSort(arr) {
    // If array length is less than 2, return undefined (no second largest element)
    if (arr.length < 2) return undefined;
    
    // Sort the array in ascending order
    const sortedArray = arr.sort((a, b) => a - b);
    
    // Return the second last element, which is the second largest
    return sortedArray[arr.length - 2];
  }
  
  function secondLargest(arr) {
    if (arr.length < 2) return undefined; // Edge case: not enough elements
    
    let highest = -Infinity;    // Stores the largest element
    let secondHighest = -Infinity; // Stores the second largest element
  
    for (const num of arr) {
      if (num > highest) {
        secondHighest = highest; // Update second largest before updating largest
        highest = num; // Update largest
      } else if (num > secondHighest && num < highest) {
        secondHighest = num; // Update second largest if the number is less than largest but greater than second largest
      }
    }
  
    return secondHighest === -Infinity ? undefined : secondHighest; // Return undefined if no second largest exists
  }
  
  console.log(secondLargest([1, 5, 6, 2, 3, 4])); // Output: 5
  console.log(secondLargest([1, 2])); // Output: 1
  console.log(secondLargest([1])); // Output: undefined  
  console.log(secondLargestSort([1, 5, 6, 2, 3, 4])); // Output: 5
  
  module.exports = { secondLargestSort, secondLargest }