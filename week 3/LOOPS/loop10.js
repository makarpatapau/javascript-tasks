/* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */

function countdownTimer(start) {
  let current = start;

  const interval = setInterval(() => {
    console.log(current);
    current--;

    if (current < 0) {
      clearInterval(interval);
      console.log("Time's up!");
    }
  }, 1000); // 1-second intervals
}

// Example usage:
countdownTimer(10);
