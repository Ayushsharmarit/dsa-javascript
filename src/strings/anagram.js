function anagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    let obj = {};
    
    // Count occurrences of characters in str1
    for (const element of str1) {
      obj[element] = (obj[element] || 0) + 1;
    }
  
    // Decrease count while checking str2
    for (const element of str2) {
        console.log(!obj[element])
      if (!obj[element]) return false; // If letter not found or count exhausted, return false
      obj[element]--;
    }
   
    return true;
  }
  
  console.log(anagram("ayush", "shayt")); // false
//   console.log(anagram("listen", "silent")); // true
//   console.log(anagram("hello", "oellh")); // true
//   console.log(anagram("test", "ttew")); // false
  