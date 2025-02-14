// . Create a histogram of character frequencies in a string
// Count the number of times each character appears in a string.


function frequency(str) {
    return str.split('').reduce((acc, char) => {
      if (char !== ' ') { // ✅ Ignore spaces
        acc[char] = (acc[char] || 0) + 1;
      }
      return acc;
    }, {});
  }
  
  const str = "hello world";
  console.log(frequency(str)); // ✅ Expected output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
  