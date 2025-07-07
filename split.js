
function split(str){
    const result=[];
    let word="";
    for (let i=0;i<str.length;i++){
    if(str[i]===" "){
        result.push(word)
        word="";
    }else{
        word=word+str[i]
    }
 
  
    }
       if (word.length > 0) {
    result.push(word);
  }
    return result
    
}

const str="hello world"
console.log(split(str))