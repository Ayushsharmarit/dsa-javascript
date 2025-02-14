const people = [
    { name: "John", age: 28 },
    { name: "Jane", age: 22 },
    { name: "Mark", age: 35 }
  ];
  // Output: ["John", "Jane", "Mark"]

  
  function format(arr){
    return arr.map((item)=>{
        return item.name
    })
  }

  console.log(format(people))