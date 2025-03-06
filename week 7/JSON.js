/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

const student = { name: "Nick", age: 16, grade: 87 };
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

const backFromJSON = JSON.parse(studentJSON);
console.log(backFromJSON);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

const classroom = [
  { name: "John", age: 13, grade: 66 },
  { name: "Steve", age: 15, grade: 86 },
  { name: "Martin", age: 14, grade: 75 },
];

const classroomJSON = JSON.stringify(classroom);
console.log(classroomJSON);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

const classroomParse = JSON.parse(classroomJSON);
console.log(classroomParse.map((any) => any.name));

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

const weatherReport = { temperature: 23, humidity: 65, conditions: "Sunny" };
const weatherJSON = JSON.stringify(weatherReport);

const newWeather = JSON.parse(weatherJSON);
console.log(newWeather.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

const movies = [
  { title: "Sunny Day", Director: "Woods", rating: 5.9 },
  { title: "Stormy Day", Director: "Peters", rating: 9.1 },
  { title: "Windy Day", Director: "Jameson", rating: 8.8 },
  { title: "Rainy Day", Director: "Wellengstain", rating: 7.9 },
];

const moviesJSON = JSON.stringify(movies);
const parseMovies = JSON.parse(moviesJSON);
console.log(
  parseMovies
    .filter((movie) => movie.rating > 8)
    .map((whatever) => whatever.title)
);

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

function filterHighRatedMovies(moviesJSON) {
  const jsArray = JSON.parse(moviesJSON);
  return jsArray.filter((movie) => movie.rating > 8);
}
console.log(filterHighRatedMovies(moviesJSON));

/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

const shoppingCart = {
  items: [
    { name: "bread", price: 2 },
    { name: "milk", price: 1.6 },
    { name: "eggs", price: 3 },
    { name: "cheese", price: 5 },
    { name: "yougurt", price: 2.5 },
    { name: "meat", price: 10 },
  ],
};
const JSONCart = JSON.stringify(shoppingCart);
console.log(JSONCart);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

function totalCartValue() {
  const convertBack = JSON.parse(JSONCart);
  return convertBack.items.reduce((total, item) => total + item.price, 0);
}
console.log(totalCartValue());

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

const gameProgress = {
  level: 5,
  score: 250,
  livesRemaining: 3,
};

const jsonGameProgress = JSON.stringify(gameProgress);
console.log(jsonGameProgress);
const backGameProgress = JSON.parse(jsonGameProgress);
const final = (backGameProgress.score += 100);
console.log(final);
