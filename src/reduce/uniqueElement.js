const numbers = [1, 2, 3, 2, 4, 5, 1, 6];

// // output==> [1, 2, 3, 4, 5, 6]

// function getunique(arr) {
//   return arr.reduce((acc, item, index) => {
//     if (arr.indexOf(item) == index) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
// }


// console.log(getunique(numbers))


const sum = numbers.reduce((acc, num) => {
     acc = acc + num; 
     return acc
 }, 0);
 
 console.log(sum); // ✅ Output: 10 (1+2+3+4)