/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/
function findMinMax() {
  let count = Number(prompt("How many numbers do you want to input?"));

  if (isNaN(count) || count <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  let numbers = [];

  for (let i = 0; i < count; i++) {
    let input = prompt(`Enter number ${i + 1} of ${count}:`);
    let num = Number(input);

    if (isNaN(num)) {
      alert("Invalid number. Please try again.");
      i--; // Repeat this iteration
    } else {
      numbers.push(num);
    }
  }

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  console.log("Numbers entered:", numbers);
  console.log("Smallest number:", min);
  console.log("Largest number:", max);
}

findMinMax();
