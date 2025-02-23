let teamMembers = ["John", "Emily", "Mike", "Sarah"];

// 1. Loop through the `teamMembers` array and log each name to the console.
teamMembers.forEach((member) => console.log(member));
// 2. Remove the first member of the array.
teamMembers.shift();
console.log(teamMembers);
// 3. Remove the last member of the array.
teamMembers.pop();
console.log(teamMembers);
// 4. Add a new member "Alex" to the front of the array.
teamMembers.unshift("Alex");
console.log(teamMembers);
// 5. Append a new member "Linda" to the end of the array.
teamMembers.push("Linda");
console.log(teamMembers);
// 6. Create a new array that excludes the first two members, keeping the original array unchanged.
let newArray = teamMembers.slice(2);
console.log(newArray);
// 7. Find the index of "Mike" in the array.
let indexMike = teamMembers.indexOf("Mike");
console.log(indexMike);
// 8. Try to find the index of "Jake" (who is not in the array).
let indexJake = teamMembers.indexOf("Jake");
console.log(indexJake);
// 9. Replace "Mike" with "Carol" and "Bruce" in the same position.
teamMembers.splice(indexMike, 1, "Carol", "Bruce");
console.log(teamMembers);
// 10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.
let newArrayWithBob = teamMembers.concat("Bob");
console.log(newArrayWithBob);
console.log(teamMembers);
// 11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.
let newVariable = teamMembers.slice();
console.log(newVariable);
// 12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.
let newMembers = ["Tina", "Dean"];
let anotherNewArray = teamMembers.concat(newMembers);
console.log(anotherNewArray);
// 13. Find all occurrences of "John" in the array and store their positions in a new array.
let positionsOfJohn = teamMembers.reduce(
  (indexes, member, index) =>
    member === "John" ? [...indexes, index] : indexes,
  []
);
console.log(positionsOfJohn);
// 14. Transform all names in the array to be uppercase while keeping the original array unchanged.
let uppercase = teamMembers.map((hi) => hi.toUpperCase());
console.log(uppercase);
// 15. Sort `teamMembers` in alphabetical order.
teamMembers.sort();
console.log(teamMembers);
// 16. Reverse the `teamMembers` array.
teamMembers.reverse();
console.log(teamMembers);
// 17. Check if at least one member in the array is named "John".
let includesJohn = teamMembers.includes("John");
console.log(includesJohn);
// 18. Check if all names in the array have more than three letters.
let moreThanThreeLetters = teamMembers.every((dlina) => dlina.length > 3);
console.log(moreThanThreeLetters);
