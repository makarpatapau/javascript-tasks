/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

const weather = { temperature: 22, humidity: 80, condition: "Rainy" };
function rainCheck(weather) {
  if (weather.condition === "Rainy") {
    console.log("Take an umbrella!");
  }
}
rainCheck(weather);

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

const shoppingCart = [
  { name: "Apple", price: 2, quantity: 5 },
  { name: "Banana", price: 1, quantity: 8 },
  { name: "Orange", price: 3, quantity: 4 },
];

function totalPrice(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
console.log(totalPrice(shoppingCart));

/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

const restaurants = [
  { name: "The Italian Bistro", cuisineType: "Italian", rating: 4.5 },
  { name: "Sushi World", cuisineType: "Japanese", rating: 3.8 },
  { name: "Taco Heaven", cuisineType: "Mexican", rating: 4.2 },
];
function rating(restaurants) {
  if (restaurants.rating >= 4) {
    console.log(rating(restaurants));
  }
}
rating(restaurants);
/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

const bankAccount = {
  accountHolder: "John Doe",
  balance: 1000,
  transactions: [200, -100, 50, -300],
};

function calculateTotalBalance(account) {
  const totalTransactions = account.transactions.reduce((sum, t) => sum + t, 0);
  return account.balance + totalTransactions;
}

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

const students = [
  { name: "Alice", scores: [80, 90, 85], averageScore: null },
  { name: "Bob", scores: [70, 75, 72], averageScore: null },
];

function updateAverageScores(studentsArr) {
  studentsArr.forEach((student) => {
    const sum = student.scores.reduce((a, b) => a + b, 0);
    student.averageScore = sum / student.scores.length;
  });
}

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

const courses = [
  { courseName: "Math", instructor: "Mr. Smith", studentsEnrolled: 25 },
  { courseName: "Physics", instructor: "Dr. Brown", studentsEnrolled: 45 },
];

function logPopularCourses(courseList) {
  courseList.forEach((course) => {
    if (course.studentsEnrolled > 30) {
      console.log(course.courseName);
    }
  });
}

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

const pet = {
  species: "Dog",
  name: "Buddy",
  isVaccinated: false,
};

function checkVaccination(p) {
  return p.isVaccinated ? "Vaccinated" : "Vaccination required";
}

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

const city = {
  name: "Metropolis",
  population: 1200000,
  landmark: "Sky Tower",
};

function checkCitySize(c) {
  if (c.population > 1000000) {
    console.log("This is a big city!");
  }
}

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

const transactions = [
  { type: "credit", amount: 500 },
  { type: "debit", amount: 200 },
  { type: "credit", amount: 300 },
  { type: "debit", amount: 100 },
];

function calculateTransactionBalance(transactionsArr) {
  return transactionsArr.reduce((balance, t) => {
    return t.type === "credit" ? balance + t.amount : balance - t.amount;
  }, 0);
}

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

const foxPack = {
  foxes: [
    { name: "Red", age: 1, furColor: "red" },
    { name: "Snow", age: 3, furColor: "white" },
    { name: "Ash", age: 0.5, furColor: "gray" },
  ],
};

function getYoungFoxes(pack) {
  return pack.foxes.filter((fox) => fox.age < 2);
}

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

const gameCharacter = {
  name: "Archer",
  level: 5,
  health: 80,
  inventory: ["Bow", "Arrow", "Health Potion"],
};

function logInventory(character) {
  character.inventory.forEach((item) => console.log(item));
}

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

const employees = [
  { name: "Sam", role: "Developer", workingHours: 42 },
  { name: "Lily", role: "Designer", workingHours: 38 },
  { name: "Max", role: "Manager", workingHours: 45 },
];

function logOverworkedEmployees(empList) {
  empList.forEach((emp) => {
    if (emp.workingHours > 40) {
      console.log(emp.name);
    }
  });
}

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

const musicAlbums = [
  { title: "Hybrid Theory", artist: "Linkin Park", releaseYear: 2000 },
  { title: "Future Nostalgia", artist: "Dua Lipa", releaseYear: 2020 },
];

function logRecentAlbums(albums) {
  albums.forEach((album) => {
    if (album.releaseYear > 2000) {
      console.log(album.title);
    }
  });
}

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

const cars = [
  { brand: "Ford", model: "Mustang", horsepower: 450 },
  { brand: "Tesla", model: "Model S", horsepower: 670 },
  { brand: "BMW", model: "M3", horsepower: 503 },
];

function getMostPowerfulCar(carList) {
  return carList.reduce((max, car) =>
    car.horsepower > max.horsepower ? car : max
  );
}

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

const airports = [
  { name: "JFK", country: "USA", flightsPerDay: 1200 },
  { name: "Heathrow", country: "UK", flightsPerDay: 1300 },
  { name: "Changi", country: "Singapore", flightsPerDay: 950 },
];

function getBusiestAirport(airportList) {
  return airportList.reduce((max, airport) =>
    airport.flightsPerDay > max.flightsPerDay ? airport : max
  );
}
