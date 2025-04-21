/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/
function sumAndAverage() {
  let numbers = [];

  for (let i = 0; i < 10; i++) {
    let input = prompt(`Enter number ${i + 1} of 10:`);

    let num = Number(input);

    // Validate input
    if (isNaN(num)) {
      alert("Invalid number. Please try again.");
      i--; // Retry this iteration
    } else {
      numbers.push(num);
    }
  }

  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const average = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  console.log("Numbers entered:", numbers);
  console.log("Sum:", sum);
  console.log("Average:", average);
  console.log("Smallest number:", min);
  console.log("Largest number:", max);
}

sumAndAverage();
