function avgAge(peopleData) {
    const totalAge = peopleData.reduce((acc, data) => acc + data.age, 0);
    return totalAge / peopleData.length; // ✅ Division should happen here
  }
  
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
  ];
  
  console.log(avgAge(people)); // ✅ Expected output: 32.5
  