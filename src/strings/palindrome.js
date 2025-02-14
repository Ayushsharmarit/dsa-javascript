// function palindrome(str){
//     let start = 0
//     let end = str.length - 1
//     while(start < end){
//         if(str[start] !== str[end]) return false
//         end--
//         start++
//     }
//     return true
// }
// function palindrome2(str) {
//     return str === str.split('').reverse().join('');
// }

// console.log(palindrome2('level')); // true
// console.log(palindrome2('hello')); // false
// console.log(palindrome('level'))

console.log(this);

function hello() {
  let a = 10;
  function hey() {
    console.log(this, 'Hey');
  }
  arrowFunction = () => {
    console.log('Arrow Function');
    console.log(this);
  };
//   hey();
  arrowFunction()
}

console.log(hello());
