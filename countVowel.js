

function countVowel(str){
    const vowels="aeiouv";
    let count=0;
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++
        }
       
    }
    console.log("count Vowels :: ",count)
}

const str="hello world"
countVowel(str)
