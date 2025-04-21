/* 
1. Use the Math.random() method to generate a random number between 0 and 1.
2. Multiply the result by 10 and use Math.floor() to round it down to the nearest whole number.
3. Print the random number using console.log() with a message like: "Your random number is 4." 
*/

// Generate a random number between 0 and 1, then multiply by 10 and round down using Math.floor()
let randomNumber = Math.floor(Math.random() * 10);

// Print the result
console.log("Your random number is " + randomNumber + ".");
