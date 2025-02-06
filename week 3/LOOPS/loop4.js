/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20(5) numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 

Steps to start the tasks are:

1. Initialize a variable to store the count of even numbers.
2. Use a loop to prompt the user to input 20(5) numbers one by one.
3. Check if the number is even.
4. If it is even, incremet the count.
5. Log the count of even numbers.
*/

const countEvenNumbers = () => {
  let count = 0;
  for (i = 0; i < 5; i++) {
    let number = Number(window.prompt("Input 5 number one by one"));
    if (number % 2 === 0) {
      count++;
    }
  }
  console.log("The amount of even numbers:", count);
};
countEvenNumbers();
