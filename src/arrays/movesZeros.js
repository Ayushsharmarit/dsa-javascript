function moveZeroFilter(arr) {
    let nonZeroElements = arr.filter((item)=>{
        return item !== 0
    })
    let zeroElements = arr.filter((item)=>{
        return item == 0
    })
    return [...nonZeroElements, ...zeroElements]
}

function moveZeroForLoop(arr) {
    let newArray = [];
    for (const element of arr) {
      if (element !== 0) {
        newArray.push(element); // Add non-zero elements to the end
      }
    }
    // Push all zero elements at the end
    for (const element of arr) {
      if (element === 0) {
        newArray.push(element);
      }
    }
    return newArray;
  }
  

// console.log(moveZeroFilter([1,2,3,0,4,0,2,0]))
// console.log(moveZeroForLoop([1,2,3,0,4,0,2,0]))

module.exports = {
    moveZeroFilter,
    moveZeroForLoop
}