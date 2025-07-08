function CheckingPalindrome(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  if (reversed === str) {
    console.log("palindrome ");
  } else {
    console.log("not palindrome");
  }
}

const str = "madam";
CheckingPalindrome(str);
