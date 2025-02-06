const textExample = document.querySelector("p");
const textExample2 = document.querySelector(".myclass");
const textExample3 = document.querySelector(".#myID");

console.log(textExample.textContent);
console.log(textExample2.textContent);
console.log(textExample3.textContent);
/*
// selector
const myOwnButton = document.getElementById("insertBtn");
// can do itstead
// const myOwnButton = document.querySelector("#insertBtn/ header p .myclass/ div")
const myOwnText = document.getElementById("result");
const myOwnInput = document.getElementById("input");

//function
const handleClick = () => {
  myOwnText.textContent = myOwnInput.value;
};

//Trigger
myOwnButton.addEventListener("click", handleClick);

*/

/* const circle = document.getElementById("alert");
console.log(circle);

const paragraph = document.hetElementsByTagName("p");
console.log(paragraph.textContent);

function myFunction() {
  alert("some cool stuff");
}

function myFunction2() {
  alert("Why you clicked");
}
*/
