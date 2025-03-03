/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

let library = [
  { title: "Hotel", author: "Arthur Heily", yearPublished: 1965 },
  {
    title: "Joy in the morning",
    author: "P. G. Wodehouse",
    yearPublished: 1946,
  },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

console.log(library[0].title);
library[1].yearPublished = 1964;
console.log(library[1]);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

library[0].genres = "Fiction";
library[0]["isAvailable"] = true;
console.log(library[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}

const newBook = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  1960,
  "Fiction"
);

library.push(newBook);
console.log(library[2]);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

function createBook(title, author, yearPublished, genres) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
}

const anotherNewBook = createBook(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "Classic"
);

console.log(anotherNewBook);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

const parsedLibrary = JSON.parse(libraryJSON);
console.log(parsedLibrary[0].title);

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

const students = [
  { name: "Bob", age: 15, grade: 65 },
  { name: "Alex", age: 18, grade: 99 },
  { name: "David", age: 19, grade: 78 },
  { name: "John", age: 17, grade: 92 },
];

students.forEach((student) => {
  if (student.grade > 90) {
    console.log(student.name);
  }
});

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

const car = { brand: "Tesla", model: "X", year: 2019, isElectric: true };
function check(car) {
  if (car.isElectric) {
    console.log("This car is eco-friendly!");
  } else {
    console.log("This car runs on fuel.");
  }
}
check(car);
/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

const movies = [
  { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
  { title: "Titanic", director: "James Cameron", rating: 7.8 },
  { title: "Avatar", director: "James Cameron", rating: 7.9 },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    rating: 9.3,
  },
];

for (const movie of movies) {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
}

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

const cars = [
  { brand: "Ford", year: 2015 },
  { brand: "BMW", year: 1999 },
  { brand: "KIA", year: 2005 },
];

function findOldestCar(cars) {
  return cars.sort((a, b) => a.year - b.year)[0];
}

console.log(findOldestCar(cars));

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

const userProfiles = [
  { username: "john_doe", email: "john@example.com", isAdmin: false },
  { username: "admin_user", email: "admin@example.com", isAdmin: true },
  { username: "jane_doe", email: "jane@example.com", isAdmin: false },
  { username: "super_admin", email: "super@example.com", isAdmin: true },
];
function getAdmins(users) {
  return users.filter((user) => user.isAdmin);
}

console.log(getAdmins(userProfiles));

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

const orders = [
  { orderId: 101, customerName: "Alice", totalAmount: 250, status: "pending" },
  { orderId: 102, customerName: "Bob", totalAmount: 400, status: "completed" },
  {
    orderId: 103,
    customerName: "Charls",
    totalAmount: 150,
    status: "completed",
  },
];

function getCompleted(orders) {
  return orders.filter((order) => order.status === "completed");
}
console.log(getCompleted(orders));
/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

const smartphone = {
  brand: "iPhone",
  model: "16",
  batteryLife: "95%",
  is5GEnabled: true,
};

function check(smartphone) {
  if (smartphone.is5GEnabled) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G.");
  }
}
check(smartphone);

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

const fox = { name: "fox", age: 5, habitat: "forest" };

function age(fox) {
  if (fox.age < 3) {
    console.log("This fox is young");
  } else {
    console.log("This fox is an adult");
  }
}
age(fox);
/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

const employees = [
  { name: "Daniel", position: "CEO", salary: 5000 },
  { name: "Emma", position: "CMO", salary: 4000 },
  { name: "Robert", position: "Accountant", salary: 3000 },
];

function salary(employees) {
  return employees.reduce((total, employee) => total + employee.salary, 0);
}

console.log(salary(employees));
