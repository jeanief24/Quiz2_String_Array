// DO NOT HARDCODE ANY OF THE ANSWER

// STRINGs
const phrase = "The cow jumped over the moon";

// get the last word of the phrase 
let lastWord=phrase.slice (24)
console.log (lastWord)

// get the first word in all upper case
let firstWord = phrase.slice(0, 3)
console.log (firstWord.toUpperCase())

console.log (firstWord)
// get the last index of 'o'
let lastO=phrase.length



// ARRAYs
// initialize prime to a empty array
let prime=[]

// add the number 1 to the array
prime.push (1)
console.log (prime)
// add the number 3 to the array
prime.push(3)
console.log (prime)
// add the number 5 to the array
prime.push(5)
// get the array length
let arrayLength;
arrayLength = prime.length
// LOOPS

// removes the letter 'm' from the phrase
// do not use 'replaceAll'
// HINT: Use a for loop to look at each character
let noM;

// similar to acronymn, but instead of getting the first character, get the last character of each word in the phrase 'The cow jumped over the moon'
// For example if the word is 'Launch Code', the endingChars is 'he'. 'h' from Launch and 'e' from Code. 
// The expected answer for this is 'ewdren'
let endingChars;






















// YOU'RE DONE!!!!

// DO NOT MODIFY
module.exports = {
  lastWord: lastWord,
  firstWord: firstWord,
  lastO: lastO,
  noM: noM,
  endingChars: endingChars,
  primes: primes,
  arrayLength: arrayLength
}