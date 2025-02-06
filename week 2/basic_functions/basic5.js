/* Create a function named generateRandomNumber that:
Takes two parameters, min and max.
Returns a random integer between min and max (inclusive).
Call the function with the arguments 1 and 10.
Print the result using console.log().

Hint: Use Math.random(), Math.floor(), and simple math.

My notes:
Math.random() generates a random decimal between 0 and 1.
(max - min) scales this random number to the desired range, calculates the range.
+ min shifts the range to start from min, so it starts from 1 not 0.
Math.floor() rounds the result down to the nearest integer.

*/

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(generateRandomNumber(1, 10));
