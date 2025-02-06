/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/

const text = document.getElementById("content");
const button = document.getElementById("second");
console.log(text.textContent);

function changeText() {
  console.log("button was clicked");
  text.textContent = "Hello World";
}
function changeBack() {
  text.textContent = "This is makar";
  button.textContent = "I was clicked";
}
