function twoSum(arr, target) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Input must be an array');
    }
    if (arr.length === 0) {
      return -1; // Early return for empty arrays
    }
    let map = new Map();
    for (let index = 0; index < arr.length; index++) {
      let compliment = target - arr[index];
      if (map.has(compliment)) {
        return [map.get(compliment), index];
      }
      map.set(arr[index], index);
    }
    return -1; // Return -1 if no pair is found
  }
  
  module.exports = twoSum