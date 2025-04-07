"use strict";

/* Task 1: Try-Catch for Debugging
/*
Task: Wrap the code inside a `try-catch` block.
      Simulate an error by calling an undefined function.

Test cases:
task1(); // Should log: "Error caught: function is not defined"
*/

function task1() {
  try {
    undefinedFunction(); // Simulate error
  } catch (error) {
    console.log("Error caught: function is not defined");
  }
}

/* Task 2: Handle ReferenceError
/*
Task: Try using a variable that hasn’t been declared.
      Catch the error and log: "ReferenceError caught: [error message]"

Test cases:
task2(); // Should log: "ReferenceError caught: myVariable is not defined"
*/

function task2() {
  try {
    console.log(myVariable); // myVariable not defined
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log(`ReferenceError caught: ${error.message}`);
    } else {
      throw error;
    }
  }
}

/* Task 3: Using Finally
/*
Task: Simulate an error, log it, and ensure "Task completed." always runs.

Test cases:
task3(); // Should log an error message and "Task completed."
*/

function task3() {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("Task completed.");
  }
}

/* Task 4: Fix JSON Parsing Error
/*
Task: Try to parse invalid JSON. If it fails, log `"Invalid JSON format"`

Test cases:
parseJSON('{"name": "Alice", "age": 25}'); // Should return object
parseJSON("Invalid JSON text"); // Should log an error and return null
*/

function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("Invalid JSON format");
    return null;
  }
}

/* Task 5: Throwing a Custom Error
/*
Task: If age is below 18, throw `"You must be at least 18."`

Test cases:
checkAge(20); // Should log: "Access granted."
checkAge(16); // Should log: "Error: You must be at least 18."
*/

function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("You must be at least 18.");
    }
    console.log("Access granted.");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

/* Task 6: Save and Retrieve from LocalStorage
/*
Task: Write a function to store an object in **LocalStorage**.
      Then retrieve it and handle errors if JSON is invalid.

Test cases:
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
*/

function saveUser(user) {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log("Error saving user:", error.message);
  }
}

function getUser() {
  try {
    const data = localStorage.getItem("user");
    return JSON.parse(data);
  } catch (error) {
    console.log("Error: Invalid user data in LocalStorage.");
    return null;
  }
}

/* Task 7: Check if Object Property Exists
/*
Task: If a property is missing, log `"Property not found"`

Test cases:
checkProperty({ name: "Bob", age: 30 }, "name"); // Should log value
checkProperty({ name: "Bob", age: 30 }, "email"); // Should log "Property not found"
*/

function checkProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  } else {
    console.log("Property not found");
  }
}

/* Task 8: Fetch API Error Handling
/*
Task: Use `fetch()` to get data, handle errors properly.

Test cases:
fetchData("https://jsonplaceholder.typicode.com/users"); // Should log API data
fetchData("invalid-url"); // Should log network error
*/

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch error:", error.message);
  }
}

/* Task 9: Fix a URI Error
/*
Task: Try decoding a broken URI string.

Test cases:
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError
*/

function task9(malformedURI) {
  try {
    const decoded = decodeURIComponent(malformedURI);
    console.log(decoded);
  } catch (error) {
    if (error instanceof URIError) {
      console.log("URIError: Invalid URI");
    } else {
      throw error;
    }
  }
}

/* Task 10: Clear LocalStorage
/*
Task: Ensure LocalStorage is cleared safely.

Test cases:
clearStorage(); // Should log "LocalStorage cleared."
*/

function clearStorage() {
  try {
    localStorage.clear();
    console.log("LocalStorage cleared.");
  } catch (error) {
    console.log("Error clearing LocalStorage:", error.message);
  }
}
