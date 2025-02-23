/*
const pancakeType = document.getElementById("type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPrice = document.getElementById("totalPriceDisplay");
const banner = document.getElementById("priceBanner");

const chooseType = () => {
  let totalPrice = parseFloat(pancakeType.value);

  toppings.forEach((topping) => {
    if (topping.checked) {
      totalPrice += parseFloat(topping.value);
    }
  });

  extras.forEach((extra) => {
    if (extra.checked) {
      totalPrice += parseFloat(extra.value);
    }
  });

  totalPriceDisplay.textContent = totalPrice + "€";
  priceBanner.textContent = totalPrice + "€";
};

pancakeType.addEventListener("change", chooseType);
toppings.forEach((topping) => topping.addEventListener("change", chooseType));
extras.forEach((extra) => extra.addEventListener("change", chooseType));
*/

// the pancake 2nd
const type = document.querySelector("#type"); // # shows that it is ID
const toppings = document.querySelectorAll(".topping"); // . shows that it is class
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPriceBanner");
const button = document.getElementById("seeOrder");
const customerName = document.getElementById("customerName");
const summaryText = document.getElementById("summaryText");
/*
const calculateTotal = () => {
  let totalPrice = parseFloat(pancakeType.value);

  toppings.forEach((topping) => {
    if (topping.checked) {
      totalPrice += parseFloat(topping.value);
    }
  });

  extras.forEach((extra) => {
    if (extra.checked) {
      totalPrice += parseFloat(extra.value);
    }
  });

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeType.addEventListener("change", calculateTotal);
toppings.forEach((topping) =>
  topping.addEventListener("change", calculateTotal)
);
extras.forEach((extra) => extra.addEventListener("change", calculateTotal));

*/

const changeHandler = (event) => {
  console.log("Event: ", event);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

  console.log("BasePrice: ", basePrice);

  // const toppingsTotalExample = [];
  // const checkedToppings = document.querySelectorAll(".topping:checked");
  // checkedToppings.forEach((topping) => {
  // toppingsTotalArray.push(topping.dataset.price);
  // });

  // toppingsTotalExample = toppingTotalArray.forEach((topping) => {
  // let sum = 0;
  // sum += parseFloat(topping);
  // });      DOWN BELOW IS THE BETTER WAY OF DOING WHAT IS COMMENTED OUT HERE:

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  const delivery = [...document.querySelectorAll(".delivery:checked")].reduce(
    (sum, delivery) => sum + parseFloat(delivery.dataset.price),
    0
  );

  const allTotals = basePrice + toppingsTotal + extrasTotal + delivery;

  totalPriceDisplay.textContent = `${allTotals}€`;
  totalPriceBanner.textContent = `${allTotals}€`;
};
pancakeForm.addEventListener("change", changeHandler);

const retrieve = () => {
  summaryText.textContent = "Your name: " + customerName.value;
};
button.addEventListener("click", retrieve);
