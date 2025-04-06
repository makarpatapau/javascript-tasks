"use strict";

/* Task 1: Fix the Array Copying  
Fix the function to correctly clone `fruits`.  
*/

const fruits = ["apple", "banana", "orange"];

// Fix this
const newFruits = [...fruits];
newFruits.push("grape");

console.log(fruits); // Expected: ["apple", "banana", "orange"]

/* Task 2: Fix Array Merging  
Correctly merge the `oldTasks` and `newTasks` arrays.  
*/

const oldTasks = ["task1", "task2"];
const newTasks = ["task3", "task4"];

// Fix this
const allTasks = [...oldTasks, ...newTasks];

console.log(allTasks); // Expected: ["task1", "task2", "task3", "task4"]

/* Task 3: Fix Object Merging  
Combine `defaultSettings` with `userSettings`.  
*/

const defaultSettings = { theme: "light", fontSize: 14 };
const userSettings = { theme: "dark" };

// Fix this
const finalSettings = { ...defaultSettings, ...userSettings };

console.log(finalSettings); // Expected: { theme: "dark", fontSize: 14 }

/* Task 4: Fix Function with Rest Operator  
Make the function work for any number of numbers.  
*/

function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(2, 3, 4));

/* Task 5: Fix Rest Destructuring  
Extract `title` and collect the remaining properties into `extraInfo`.  
*/

const book = { title: "JavaScript Guide", pages: 400, author: "John Doe" };

// Destructuring `title` and collecting the rest in `extraInfo`
const { title, ...extraInfo } = book;

console.log(title); // Expected: "JavaScript Guide"
console.log(extraInfo); // Expected: { pages: 400, author: "John Doe" }
