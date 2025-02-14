const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
  ];
  // Output: ["Alice is 25 years old", "Bob is 30 years old"]

  function format(arr){
    return arr.map((item)=>{
        return `${item.name} is ${item.age} years old`
    })
  }

  console.log(format(users))