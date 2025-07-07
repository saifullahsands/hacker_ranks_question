function reverseString(str) { //Hello world
  let word = "";
  const splitString = str.split(" "); // ['Hello', 'World']

  for (let i = 0; i < splitString.length; i++) {
    const element = splitString[i]; //Hello

    const final=element.split("")

    for(let j=final.length-1;j>=0;j--){
      // console.log("final",final[j])
      word=word+final[j]
    }

      word=word+" "
    // console.log("final ",final)
    
  }
  console.log("reversed :: ",word)
}

// const str = "hello world";




function splitFunction(str){
  let word='';
  let resultArray=[]
  
  for (let char of str){
    if(char===" "){
      resultArray.push(word)
      word='';
    }
    else{
      word=word+char
    }
  }
  if(word.length>0){
    resultArray.push(word)
  }
 
  
  console.log("word",resultArray)
}

const str="hello world"
splitFunction(str)
reverseString(str);