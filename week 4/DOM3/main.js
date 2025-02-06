/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/

const input = document.querySelector("#input");
const text = document.querySelector("div");

function update() {
  text.textContent = input.value;
}

input.addEventListener("keydown", update);
