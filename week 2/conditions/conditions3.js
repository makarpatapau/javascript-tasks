/* 
Write a function named getGrade:
Take a score as a parameter.
If score is 90 or higher, return "Grade A".
If score is between 80 and 89, return "Grade B".
For any other score, return "Grade C".
Call the function with scores like 85 and 75 and print the result. 
*/

function getGrade(score) {
  if (score >= 90) {
    return "Grade A";
  } else if (score >= 80 && score <= 89) {
    return "Grade B";
  } else {
    return "Grade C";
  }
}

// Call the function with example scores
console.log("Score 85:", getGrade(85)); // Grade B
console.log("Score 75:", getGrade(75)); // Grade C
