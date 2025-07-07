
function checkingPalindrome(str){
    let reversed='';
    for (let char of str){
        reversed=char+reversed
      
    }
      if(str===reversed){
        console.log("yes it is a palindrome ")
    }
    else{
        console.log("noo ")
    }
}

const str="hello";
checkingPalindrome(str)
