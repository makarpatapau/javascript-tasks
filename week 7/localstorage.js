/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

localStorage.setItem("message", "Hello, LocalStorage!");
const retrieved = localStorage.getItem("message");
console.log(retrieved);

/* Task 2
    Create an object `userSettings` with:
    - `theme` ("dark" or "light")
    - `language` ("English", "Spanish", etc.)

    Convert it to a JSON string and store it in LocalStorage.
    Retrieve it, parse it, and log the `theme` property.
    */

const userSettings = { theme: "light", language: "English" };
const json = JSON.stringify(userSettings);
localStorage.setItem("storage", json);

const retrieve = localStorage.getItem("storage");
const parsed = JSON.parse(retrieve);
console.log(parsed.theme);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

const favoriteBooks = [
  { title: "Next turn", author: "Oldeman" },
  { title: "Sandy winds", author: "Richardson" },
  { title: "Black rose", author: "Finugreck" },
];

const stringified = JSON.stringify(favoriteBooks);

localStorage.setItem("task3", stringified);
const whatever1 = localStorage.getItem("task3");
const books = JSON.parse(whatever1);
console.log(books.map((any) => any.title));

/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

function saveToLocalStorage(key, object) {
  const jsonString = JSON.stringify(object);
  localStorage.setItem(key, jsonString);
}

saveToLocalStorage("user", { name: "Makar", age: 25 });

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  try {
    const parsed = JSON.parse(value);
    console.log(parsed);
    return parsed;
  } catch (e) {
    console.log(value);
    return value;
  }
}

getFromLocalStorage("user");

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

const userProfile = {
  username: "makar25",
  email: "makar@example.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};

localStorage.setItem("userProfile", JSON.stringify(userProfile));
let profile = JSON.parse(localStorage.getItem("userProfile"));
profile.preferences.theme = "dark mode";
localStorage.setItem("userProfile", JSON.stringify(profile));
console.log(profile);

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

const shoppingList = {
  items: ["milk", "bread", "eggs"],
};
localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
  const stored = JSON.parse(localStorage.getItem("shoppingList"));
  stored.items.push(item);
  localStorage.setItem("shoppingList", JSON.stringify(stored));
  console.log(stored);
}

addItemToList("cheese");

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

const counter = {
  count: 0,
};
localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter() {
  const storedCounter = JSON.parse(localStorage.getItem("counter"));
  storedCounter.count++;
  localStorage.setItem("counter", JSON.stringify(storedCounter));
  console.log("New count:", storedCounter.count);
}

incrementCounter();

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

const tasks = [
  { id: 1, description: "Do homework", completed: false },
  { id: 2, description: "Clean room", completed: false },
  { id: 3, description: "Buy groceries", completed: false },
];
localStorage.setItem("tasks", JSON.stringify(tasks));

function markTaskComplete(taskId) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  const task = storedTasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    console.log(storedTasks);
  } else {
    console.log("Task not found");
  }
}

markTaskComplete(2);

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

function clearLocalStorage() {
  localStorage.clear();
  console.log("LocalStorage cleared.");
}

clearLocalStorage();
