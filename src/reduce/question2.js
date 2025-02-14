const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

//sample output
// {
//     apple: 3,
//     banana: 2,
//     orange: 1
//   }

// function calculate(data) {
//     return data.reduce((acc, item) => {
//       acc[item] = (acc[item] || 0) + 1;
//       return acc;
//     }, {});
//   }

function calculate(data) {
  let acc = {};
  for (const item of data) {
      acc[item] = (acc[item] || 0) + 1;
  }
  return acc
}

console.log(calculate(words));
