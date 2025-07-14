

function capitalize(str) {
    let string1=str.split(" ")
    let str2=string1.map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")
 
}

let str="hello world";

capitalize(str)