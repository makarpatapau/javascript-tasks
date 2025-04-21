/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

function canVote(age) {
  return age >= 18;
}

// Example calls
let age1 = 20;
let age2 = 16;

if (canVote(age1)) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

if (canVote(age2)) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}
