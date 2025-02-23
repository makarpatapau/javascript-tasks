// the pancake first part solution from Margit
const pancakeType = document.querySelector("#type"); // # shows that it is ID
const toppings = document.querySelectorAll(".topping"); // . shows that it is class
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPriceBanner");

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
