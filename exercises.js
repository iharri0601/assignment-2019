// Exercise 1
// The below function does not work. The variable twoPlusTwo gets set to
// undefined. Refactor the function to make it work.

function addNumbers(numberA, numberB) {
  'use strict';
  console.log(numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4

// Exercise 2
// Write a function called yell that logs out an uppercase version of a string.
function yell (string01, string02){
return string01 + string02;
}

var myyell = yell ("Hi ", "peeps!");
console.log("inside function: " + myyell.toUpperCase());

// Write a function called yell10 that uses your yell function to log out an
// uppercase version of a string 10 times.
function yell10 (string01, string02){
  return string01 + string02;
}
var myyell02 = yell10("see ","you!")
console.log("inside function: " + myyell02.toUpperCase() + myyell02.toUpperCase() + myyell02.toUpperCase() + myyell02.toUpperCase() + myyell02.toUpperCase() + myyell02.toUpperCase() + myyell02.toUpperCase() + myyell02.toUpperCase() + myyell02.toUpperCase() + myyell02.toUpperCase());


// Exercise 3
// Write a function called longest that returns the longest of two input strings
//or arrays.
function longest(word1, word2) {
  console.log(word1.length);
  console.log(word2.length);

  if (word1.length > word2.length) {
    return word1 + " is longer"
  }else{
    return word2 + " is longer"
  }
}


var longestNumber = longest("Goodbye", "World");
console.log(longestNumber);

// Exercise 4
// Write a function called isVowel that takes a character (i.e. a string of
// length 1) and returns true if it is a vowel, uppercase or lowercase. The
// function should return false if the character is not a vowel.
function isvowel(Words){
  var vowels = ["a","e","i","o"];
  var uppercase = ["A","B","C","D"];
  var lowercase = ["a","b","c","d"];
  var isInArray = vowels.includes(Words);



  if (vowels.indexOf(Words) >-1) {
  console.log(Words);
  return true;
} else {
  return false;
}
};
console.log(isvowel("A"));
console.log(isvowel("b"));
console.log(isvowel("d"));
