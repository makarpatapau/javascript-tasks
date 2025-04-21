/* 

Write a function named generateMultiplicationTable:
- Take a number (e.g., 5) as input.
- Use a loop to generate the multiplication table for that number.
Log the table in the console.

Example for 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
 */

function generateMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

// Example usage:
generateMultiplicationTable(5);

// IF WE WANT A USER TO ENTER A NUMBER
// const userNumber = Number(prompt("Enter a number for the multiplication table:"));
// if (!isNaN(userNumber)) {
//   generateMultiplicationTable(userNumber);
// } else {
//   alert("Invalid number.");
// }
