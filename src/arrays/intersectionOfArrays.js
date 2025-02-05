function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    
    // Filter elements from set1 that are also in set2
    const result = [...set1].filter(element => set2.has(element));
    
    return result;
}

function intersectionForLoop(arr1, arr2) {
    let intersectedArray = [];
    
    // Loop through arr1
    for (let i = 0; i < arr1.length; i++) {
        // Check if the element from arr1 is in arr2 and not already added to the result
        if (arr2.includes(arr1[i]) && !intersectedArray.includes(arr1[i])) {
            intersectedArray.push(arr1[i]);
        }
    }
    
    return intersectedArray;
}

console.log(intersection([1,2,3,4],[2,3,6,7]))
console.log(intersectionForLoop([1,2,3,4],[2,3,6,7]))

module.exports = {
    intersection,
    intersectionForLoop
}