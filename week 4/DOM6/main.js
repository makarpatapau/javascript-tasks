/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/
document.getElementById("myForm").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  errorMsg.textContent = ""; // Clear previous message

  if (!name || !email) {
    event.preventDefault(); // Stop form submission
    errorMsg.textContent = "Both name and email are required.";
  }
});
