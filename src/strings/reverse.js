function reverse(str) {
  return str.split('').reduceRight((acc, char) => acc + char,'');
}

function reverseForLoop(str){
    let newStr=''
    for (const element of str) {
        newStr = element + newStr
    }
return newStr
}


function reverseReduce(str){
return str.split('').reduce((acc, char)=> char + acc,'')
}



console.log(reverseReduce('ayush'));
