/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

function buildGroceryList() {
  let groceryList = [];
  let item;

  while (true) {
    item = prompt("Enter a grocery item (type 'done' to finish):");

    if (item === null) break; // In case user cancels the prompt
    if (item.toLowerCase() === "done") break;

    if (item.trim() !== "") {
      groceryList.push(item.trim());
    }
  }

  console.log("Your grocery list:");
  groceryList.forEach((grocery, index) => {
    console.log(`${index + 1}. ${grocery}`);
  });
}

buildGroceryList();
