function checkDuplicateSet(arr){
    return new Set(arr).size !== arr.length;
}

function checkDuplicateMap(arr){
let map = new Map()
for (const element of arr) {
    if(map.has(element)) return true
    map.set(element, 1)
}
return false
}

module.exports={
    checkDuplicateMap,
    checkDuplicateSet
}


console.log(checkDuplicateMap([1,2,3,4,5,5]))
console.log(checkDuplicateMap([1,2,3,4,5,6]))