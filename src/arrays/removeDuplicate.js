function removeDuplicate(arr) {
  return [...new Set(arr)];
}
// console.log(removeDuplicate([1, 2, 3, 4, 1, 2, 5]));

function removeDuplicateReduce(arr) {
  return arr.reduce((acc, element) => {
    if (!acc.includes(element)) {
      acc.push(element);
    }
    return acc;
  }, []);
}

function removeDuplicateFilter(arr) {
  return arr.filter((item, index) => {
   return arr.indexOf(item) === index;
  });
}
function removeDuplicatesMap(arr) {
    const map = new Map();
    return arr.filter(item => !map.has(item) && map.set(item, true));
}

// Example
console.log(removeDuplicatesMap([1, 2, 2, 3, 4, 4, 5]));

// console.log(removeDuplicateFilter([1, 2, 3, 4, 1, 2, 5]));

module.exports = {
    removeDuplicate,
    removeDuplicateFilter,
    removeDuplicateReduce,
    removeDuplicatesMap
}
