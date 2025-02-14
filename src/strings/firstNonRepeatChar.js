function check(str) {
  let obj = {};
  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (const char of str) {
    if(obj[char] == 1) return char
  }
}

console.log(check('ayaauuush'))