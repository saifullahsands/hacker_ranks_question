// function checkingFriend(arr) {
 
    
//   let friends = {};
//   for (let i = 0; i < frn.length; i++) {
    
//     let element=frn[i]
//     console.log("arr ",frn.length)

//     console.log(element)
//   }
 
// }
const inputString = "Joe Sue Sue Phi Phi Joe Phi Alice";
// const word=input.split(" ")
function splitmethod(input){
let result=[]
let word=''

for (let eachword of input){
    word=word+eachword
    result.push(word)
}
    if(word.length>0){
        result.push(word)
    }
    return result[result.length-1]
}


console.log("array result :: ",splitmethod(inputString))

// let lines=[];
// for (let i=0;i<word.length;i=i+2){
//    lines.push(word[i]+" "+word[i+1])
// }



