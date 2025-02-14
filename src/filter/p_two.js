const arr = [0, 1, false, 2, "", 3, null, "hello"];
// Output: [1, 2, 3, "hello"]

function format(arr){
    return arr.filter((item)=>item)
  }

  const format_two = arr => arr.filter(Boolean);
console.log(format_two(arr)); // Output: [1, 2, 3, "hello"]

  console.log(format_two(arr))