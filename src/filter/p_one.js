const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 19 }
  ];
  // Output: [{ name: "Bob", age: 22 }, { name: "David", age: 19 }]

  
  function format(arr){
    return arr.filter((item)=>{
        return item.age > 18
    })
  }

  console.log(format(users))