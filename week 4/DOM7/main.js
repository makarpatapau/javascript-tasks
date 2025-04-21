/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

let count = 0;

document.getElementById("clickBtn").addEventListener("click", function () {
  count++;
  document.getElementById("counter").textContent = count;
});
