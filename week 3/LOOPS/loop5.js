/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.

Steps:
1. Initialize a variable to store the sum of all numbers.
2. -!!- the count of numbers
3. Use the loop to prompt the user to input numbers
4. Check if the number is 0.
5. If it is not 0, add it to te sum and increment amount.
6. If it is 0 calculate the average and log it
7.log the avarage.
 */

const calculateAverageUntilZero = () => {
  let sum;
  let count;
  let average;
  while (count != 0) {
    number = Number(
      window.prompt("Input numbers for an averag, input 0 to stop")
    );
    if (count === 0) {
      break;
      console.log("Average is:", average);
      average = sum / count;
    }
  }
};
calculateAverageUntilZero();
