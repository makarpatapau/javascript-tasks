const text = document.getElementById("content");
const button = document.getElementById("second");
console.log(text.textContent);
con;

function changeText() {
  console.log("button was clicked");
  text.textContent = "Hello World";
}
function changeBack() {
  text.textContent = "This is makar";
  button.textContent = "I was clicked";
}
