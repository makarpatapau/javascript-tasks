/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
  let numbers = [];
  let continueInput = "y";

  while (continueInput.toLowerCase() === "y") {
    let num = Number(prompt("Enter a number:"));

    // Validate it's a real number
    if (!isNaN(num)) {
      numbers.push(num);
    } else {
      alert("That is not a valid number. Try again.");
      continue;
    }

    continueInput = prompt("Do you want to continue giving numbers? (y/n)");
  }

  // Calculate and log the average
  if (numbers.length > 0) {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const avg = sum / numbers.length;
    console.log("Average:", avg);
  } else {
    console.log("No numbers were entered.");
  }
};

askToContinue();
