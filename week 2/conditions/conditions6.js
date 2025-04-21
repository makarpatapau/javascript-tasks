/*
Write a function named isEven:
Take a number as a parameter.
Return true if the number is even, or false if it’s odd.
Call the function with numbers like 4 and 7, and print "The number is even!" or "The number is odd!" based on the result. 
*/

function isEven(number) {
  return number % 2 === 0;
}

// Example calls
let number1 = 4;
let number2 = 7;

if (isEven(number1)) {
  console.log("The number is even!");
} else {
  console.log("The number is odd!");
}

if (isEven(number2)) {
  console.log("The number is even!");
} else {
  console.log("The number is odd!");
}
