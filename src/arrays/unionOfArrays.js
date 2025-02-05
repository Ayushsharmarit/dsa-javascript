function union(arr1, arr2) {
    return [...arr1, ...arr2]; // Returns all elements without removing duplicates
}

function unionWithUniqueElements(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]; // Ensures unique elements in the union
}

function unionWithForEach(arr1, arr2) {
    const result = [...arr1];
    arr2.forEach(element => {
        if (!result.includes(element)) {
            result.push(element);
        }
    });
    return result;
}


// // Example Usage:
console.log(unionWithForEach([1, 2, 3], [3, 4, 7, 5])); // [1, 2, 3, 3, 4, 5]
// console.log(union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 3, 4, 5]
// console.log(unionWithUniqueElements([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

module.exports={
    union,
    unionWithForEach,
    unionWithUniqueElements
}
