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
  const me = {
    name: "Makar",
    surname: "Patapau",
    age: 25,
    nationality: "Belarusian",
  };
  const convertedMe = JSON.stringify(me);
}

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here

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

// Your code here

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here
