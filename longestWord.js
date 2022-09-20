function findLongestWordLength(str) {
    let words = str.split(" ");
    let longestWord = 0;
    let word = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord) {
            longestWord = words[i].length;
            word = words[i];
        }
    }
    console.log(`The longest word has ${longestWord} characters, and the word is "${word}".`);
    //console.log(words);
    return longestWord;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");