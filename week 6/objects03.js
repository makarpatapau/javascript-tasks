/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

function User(username, email) {
  this.username = username;
  this.email = email;
  this.showInfo = function () {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  };
}

const user1 = new User("makar", "makar@example.com");
user1.showInfo();

/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  showInfo() {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const user2 = new User("alex", "alex@example.com");
user2.showInfo();
user2.changeEmail("alex.new@example.com");
user2.showInfo();

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

const theme = { name: "light", isActive: true };
document.getElementById("toggleTheme").addEventListener("click", () => {
  theme.name = theme.name === "light" ? "dark" : "light";
  theme.isActive = !theme.isActive;
  document.body.style.background = theme.name === "dark" ? "#333" : "#fff";
});

/* Second way:
 <button id="toggleTheme">Toggle Theme</button>
<script>
  const theme = { name: "light", isActive: true };

  document.getElementById("toggleTheme").addEventListener("click", () => {
    theme.name = theme.name === "light" ? "dark" : "light";
    theme.isActive = !theme.isActive;
    console.log("Theme:", theme.name);
    document.body.style.background = theme.name === "dark" ? "#333" : "#fff";
  });
</script> */

/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

const counter = { value: 0 };
document.getElementById("increase").onclick = () => {
  counter.value++;
  document.getElementById("counterValue").textContent = counter.value;
};
document.getElementById("decrease").onclick = () => {
  counter.value--;
  document.getElementById("counterValue").textContent = counter.value;
};

/* Second way:
 <div>
  <button id="decrease">-</button>
  <span id="counterValue">0</span>
  <button id="increase">+</button>
</div>
<script>
  const counter = { value: 0 };
  const counterDisplay = document.getElementById("counterValue");

  document.getElementById("increase").onclick = () => {
    counter.value++;
    counterDisplay.textContent = counter.value;
  };

  document.getElementById("decrease").onclick = () => {
    counter.value--;
    counterDisplay.textContent = counter.value;
  };
</script> */

/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

const product = { name: "Headphones", price: 50, quantity: 0 };
document.getElementById("qtyInput").addEventListener("input", (e) => {
  product.quantity = parseInt(e.target.value) || 0;
  document.getElementById("totalPrice").textContent =
    product.price * product.quantity;
});

/* Second way:
    <div>
  <p>Product: Headphones - $50 each</p>
  <input id="qtyInput" type="number" placeholder="Quantity">
  <p>Total: $<span id="totalPrice">0</span></p>
</div>
<script>
  const product = { name: "Headphones", price: 50, quantity: 0 };

  document.getElementById("qtyInput").addEventListener("input", (e) => {
    product.quantity = parseInt(e.target.value) || 0;
    document.getElementById("totalPrice").textContent = product.price * product.quantity;
  });
</script> */

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

function Task(title, description, completed = false) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}
const tasks = [];
document.getElementById("addTaskBtn").onclick = () => {
  const newTask = new Task("New Task", "Do something important");
  tasks.push(newTask);
  const li = document.createElement("li");
  li.textContent = `${newTask.title} - ${newTask.description}`;
  document.getElementById("taskList").appendChild(li);
};

/* Second way:
 <button id="addTaskBtn">Add Task</button>
<ul id="taskList"></ul>
<script>
  function Task(title, description, completed = false) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }

  const tasks = [];
  document.getElementById("addTaskBtn").onclick = () => {
    const newTask = new Task("New Task", "Do something important");
    tasks.push(newTask);
    const li = document.createElement("li");
    li.textContent = `${newTask.title} - ${newTask.description}`;
    document.getElementById("taskList").appendChild(li);
  };
</script> */

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

/* html: <input id="city" placeholder="Enter city" />
<button onclick="weatherApp.fetchWeather(document.getElementById('city').value)">Get Weather</button>
<div id="weatherOutput"></div>
*/
const weatherApp = {
  async fetchWeather(city) {
    const apiKey = "your_openweather_api_key";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
    document.getElementById("weatherOutput").innerText = `Temperature: ${(
      data.main.temp - 273.15
    ).toFixed(2)}°C`;
  },
};

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

/* <p html id="carAge"></p> */

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.age = function () {
    return new Date().getFullYear() - this.year;
  };
}

const car = new Car("Toyota", "Corolla", 2015);
document.getElementById("carAge").innerText = `Car age: ${car.age()} years`;

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

/* html:  <button id="sortUsers">Sort Users</button>
<ul id="userList"></ul> */

const users = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
];

function displayUsers() {
  const list = document.getElementById("userList");
  list.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.score}`;
    list.appendChild(li);
  });
}

document.getElementById("sortUsers").onclick = () => {
  users.sort((a, b) => b.score - a.score);
  displayUsers();
};

displayUsers();

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

/* html: <input id="itemInput" placeholder="Add item" />
<button id="addItem">Add</button>
<ul id="shoppingList"></ul> */

const shoppingList = { items: [] };

document.getElementById("addItem").onclick = () => {
  const item = document.getElementById("itemInput").value;
  if (item) {
    shoppingList.items.push(item);
    const li = document.createElement("li");
    li.textContent = item;
    document.getElementById("shoppingList").appendChild(li);
    document.getElementById("itemInput").value = "";
  }
};

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

/* html:
<div id="postList"></div> */

const posts = [
  { title: "First Post", content: "Hello world!", likes: 0 },
  { title: "Second Post", content: "More content!", likes: 0 },
];

function renderPosts() {
  const container = document.getElementById("postList");
  container.innerHTML = "";
  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><p>Likes: ${post.likes}</p>`;
    const btn = document.createElement("button");
    btn.textContent = "Like";
    btn.onclick = () => {
      posts[index].likes++;
      renderPosts();
    };
    div.appendChild(btn);
    container.appendChild(div);
  });
}

renderPosts();

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

/* html:
<p id="salaryInfo"></p> */

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
  this.increaseSalary = function (percent) {
    this.salary += this.salary * (percent / 100);
  };
}

const emp = new Employee("Jill", "Manager", 5000);
emp.increaseSalary(10);
document.getElementById(
  "salaryInfo"
).innerText = `${emp.name}'s new salary: $${emp.salary}`;

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

/* html:
<p id="timerDisplay">0s</p> */

const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++;
      document.getElementById("timerDisplay").innerText = `${this.seconds}s`;
    }, 1000);
  },
};
timer.start();

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

/* 
html:
<form id="bookForm">
  <input placeholder="Title" id="bookTitle" required>
  <input placeholder="Author" id="bookAuthor" required>
  <input placeholder="Pages" type="number" id="bookPages" required>
  <button type="submit">Add Book</button>
</form>
<ul id="bookList"></ul> */

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

document.getElementById("bookForm").onsubmit = function (e) {
  e.preventDefault();
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("bookPages").value;
  const book = new Book(title, author, pages);
  const li = document.createElement("li");
  li.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
  document.getElementById("bookList").appendChild(li);
  this.reset();
};

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

/* html:
 <input id="foxName" placeholder="Fox name">
<input id="foxLocation" placeholder="Location">
<button id="addFox">Add Fox</button>
<ul id="foxList"></ul> */

const foxTracker = {
  foxes: [],
};

document.getElementById("addFox").onclick = () => {
  const name = document.getElementById("foxName").value;
  const location = document.getElementById("foxLocation").value;
  if (name && location) {
    foxTracker.foxes.push({ name, location });
    const li = document.createElement("li");
    li.textContent = `${name} in ${location}`;
    document.getElementById("foxList").appendChild(li);
  }
};
