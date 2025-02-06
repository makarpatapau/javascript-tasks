const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const balance = document.getElementById("balance");
const message = document.getElementById("message");
const inputDeposit = document.getElementById("inputDeposit");
const inputWithdraw = document.getElementById("inputWithdraw");

/* const doSmth = () => {
   console.log("smth");
  };

 depositBtn.getEventListener("click",doSmth);
*/

let currentBalance = 0;

depositBtn.addEventListener("click", () => {
  const depositAmount = Number(inputDeposit.value);
  deposit(depositAmount);
  // to check above ::: console.log("Current Balance: ", currentBalance);
  balance.innerText = currentBalance;
});

withdrawBtn.addEventListener("click", () => {
  const withdrawAmount = Number(inputWithdraw.value);
  withdraw(withdrawAmount);
  balance.innerText = currentBalance;
});

function checkBalance() {
  return Number(balance.innerText);
}

function deposit(depositAmount) {
  if (typeof depositAmount !== "number") {
    message.innerText = "Please enter a number";
  } else if (depositAmount < 0) {
    message.innerText = "Please entera positive number";
  } else {
    currentBalance += depositAmount;
  }
}

function withdraw(withdrawAmount) {
  if (typeof withdrawAmount !== "number") {
    message.innerText = "Please enter a number";
  } else if (withdrawAmount < 0) {
    message.innerText = "Please enter a positive number";
  } else if (withdrawAmount > currentBalance) {
    message.innerText = "Insufficient funds";
  } else {
    currentBalance -= withdrawAmount;
  }
}
