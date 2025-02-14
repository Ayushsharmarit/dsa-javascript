// If two objects have the same id, and you want to sum a specific property, use reduce().


const arr1 = [{ id: 1, value: 10 }, { id: 2, value: 20 }];
const arr2 = [{ id: 1, value: 30 }, { id: 3, value: 40 }];

// [
//     { id: 1, value: 40 },  // (10 + 30)
//     { id: 2, value: 20 },
//     { id: 3, value: 40 }
// ]


function mergedArray(){
    return [...arr1, ...arr2].reduce((acc, obj)=>{

        let existing =  obj.find
    })
}