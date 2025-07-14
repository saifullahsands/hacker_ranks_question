function anagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  let sortedword1 = word1.split("").sort().join("");
  let sortedword2 = word2.split("").sort().join("");

  if (sortedword1 === sortedword2) {
    console.log("word 1", sortedword1);
    console.log("word 2", sortedword2);
    return true;
  }
}
console.log(anagram("listen", "silent"));
