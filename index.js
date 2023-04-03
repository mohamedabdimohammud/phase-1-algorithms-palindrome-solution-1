function isPalindrome(word) {
  word = word.toLowerCase();
  word = word.replace(/[^a-z0-9]/g, "");
  const reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
1. Convert the word to lowercase
2. Remove non-alphanumeric characters using a regex
3. Check if the cleaned word is the same reversed
*/

/*
The function takes a word as an argument and checks if it is a palindrome. To do this, it first converts the word to lowercase and removes all non-alphanumeric characters using a regular expression. It then checks if the cleaned word is the same when reversed. If it is, the function returns true, otherwise it returns false. 

The pseudocode outlines the steps the function takes to determine if a word is a palindrome. The first step is to convert the word to lowercase to make it case-insensitive. The second step removes all non-alphanumeric characters using a regular expression. Finally, the function checks if the cleaned word is the same when reversed. 
*/

// Add your own custom tests below this line

if (require.main === module) {
  // Run the test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}
