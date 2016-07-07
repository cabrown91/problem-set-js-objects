/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
var word = "apple";

function letterCount() {
  var wordArray = word.split(" ");
  console.log(wordArray);
  var sortedArray= wordArray.sort();
  console.log(sortedArray);
}

var letter = null;
var numberLetter = 0;

for (var i=0; i < sortedArray.length; i++) {
  if (sortedArray[i] !== letter) {
    if (numberLetter > 0 ) {
      console.log(letter + " " + numberLetter/sortedArray.length);
    }
    letter = sortedArray[i];
    numberLetter = 1;
  } else {
    numberLetter += 1;
  }
}

if (numberLetter > 0) {
  console.log(letter + " " + numberLetter/sortedArray.length);
}
}
