/* Create a variable description and assign it the value " JavaScript is Fun and powerful! ".
Perform the following:
Trim the extra spaces using .trim().
Convert the string to lowercase.
Check if it includes the word "fun".
Replace "powerful" with "amazing".
Print the final string and whether it includes "fun" using console.log().
Example output:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
 */

let description = " JavaScript is Fun and powerful! ";

// Trim the extra spaces, convert to lowercase, check for 'fun', and replace 'powerful'
let trimmedDescription = description.trim();
let lowerCaseDescription = trimmedDescription.toLowerCase();
let includesFun = lowerCaseDescription.includes("fun");
let finalDescription = lowerCaseDescription.replace("powerful", "amazing");

// Print the final string and check if it includes "fun"
console.log("Final description: " + finalDescription);
console.log("Does it include 'fun'? " + includesFun);
