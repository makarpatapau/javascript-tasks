/* 
1. Create a variable num and assign it the value 5.67.
2. Use the Math.round() method to round num to the nearest whole number.
3. Use the Math.floor() method to round it down to the nearest whole number.
4. Use the Math.ceil() method to round it up to the nearest whole number.
5. Print the results using console.log() with messages like: "The rounded value is 6." 
*/
let num = 5.67;

// Round to the nearest whole number using Math.round()
let roundedValue = Math.round(num);

// Round down to the nearest whole number using Math.floor()
let roundedDown = Math.floor(num);

// Round up to the nearest whole number using Math.ceil()
let roundedUp = Math.ceil(num);

// Print the results
console.log("The rounded value is " + roundedValue + ".");
console.log("The rounded down value is " + roundedDown + ".");
console.log("The rounded up value is " + roundedUp + ".");
