function rotate(arr, k) {
    let n = arr.length; // Fixed length calculation
    k = k % n; // Fixed modulo operation
    
    function reverse(start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    reverse(0, n - 1);  // Reverse the entire array
    reverse(0, k - 1);  // Reverse first k elements
    reverse(k, n - 1);  // Reverse the rest
  
    return arr;
  }
  
  function rotateSlice(arr, k) {
    let n = arr.length; // Fixed length calculation
    k = k % n; // Fixed modulo operation
  
    return [...arr.slice(n - k), ...arr.slice(0, n - k)];
  }
  
  // Test cases
  console.log(rotate([1, 2, 3, 4, 5, 6], 1));       
  console.log(rotateSlice([1, 2, 3, 4, 5, 6], 1));  
  
  module.exports = {
    rotate,
    rotateSlice
  };
  