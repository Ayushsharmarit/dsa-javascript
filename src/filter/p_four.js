const users = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Alice" },
    { name: "Charlie" }
  ];
  // Output: ["Alice", "Bob", "Charlie"]

  function format(arr){
   let set = new Set()
   for (const element of arr) {
    set.add(element.name)
   }
   return [...set]
  }

  console.log(format(users))

let str = 'Ayush @123 sharma';

console.log(str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase());

let a = 'leve2345l';
let b = 'lev12el';

console.log(
  a
    .replace(/[^a-z]/g, '').toLowerCase()
    .split('')
    .reverse()
    .join('') ==
    b
      .replace(/[^a-z]/g, '').toLowerCase()
      .split('')
      .reverse()
      .join('')
);
