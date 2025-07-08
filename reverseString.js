

function reverseString(str){
const stringArray=str.split("")
let word=''
console.log(stringArray)
 for(let i=stringArray.length-1;i>=0;i--){
    word=word+stringArray[i]
  
 }
console.log(word)
}

const str="hello"
reverseString(str)