// const type = document.querySelector("#type"); // # shows that it is ID
// const toppings = document.querySelectorAll(".topping"); // . shows that it is class
// const extras = document.querySelectorAll(".extra");
// const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
// const totalPriceBanner = document.querySelector("#totalPriceBanner");
// const button = document.getElementById("seeOrder");
// const customerName = document.getElementById("customerName");
// const summaryText = document.getElementById("summaryText");
// const deliveryOptions = document.querySelectorAll(".delivery");
// const pancakeForm = document.getElementById("pancakeForm");

// // let deliveryFee = 0; new

// const changeHandler = (event) => {
//   console.log("Event: ", event);
//   const basePrice = parseFloat(
//     document.getElementById("type").selectedOptions[0].dataset.price
//   );

//   // console.log("BasePrice: ", basePrice);

//   const toppingsTotal = [
//     ...document.querySelectorAll(".topping:checked"),
//   ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

//   const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
//     (sum, extra) => sum + parseFloat(extra.dataset.price),
//     0
//   );

//   const delivery = [...document.querySelectorAll(".delivery:checked")].reduce(
//     (sum, delivery) => sum + parseFloat(delivery.dataset.price),
//     0
//   );

//   const allTotals = basePrice + toppingsTotal + extrasTotal + delivery;

//   totalPriceDisplay.textContent = `${allTotals}€`;
//   totalPriceBanner.textContent = `${allTotals}€`;
// };
// pancakeForm.addEventListener("change", changeHandler);

// const retrieveOrderSummary = () => {
//   const name = customerName.value || "Unknown Customer";
//   const selectedPancake = type.selectedOptions[0].text;
//   const selectedToppings = [
//     ...document.querySelectorAll(".topping:checked"),
//   ].map((topping) => topping.parentElement.textContent.trim());
//   const selectedExtras = [...document.querySelectorAll(".extra:checked")].map(
//     (extra) => extra.parentElement.textContent.trim()
//   );
//   const selectedDelivery = [
//     ...document.querySelectorAll(".delivery:checked"),
//   ].map((delivery) => delivery.parentElement.textContent.trim())[0];

//   let summary = `Your name: ${name}\n`;
//   summary += `Pancake Type: ${selectedPancake}\n`;
//   summary += selectedToppings.length
//     ? `Toppings: ${selectedToppings.join(", ")}\n`
//     : "Toppings: None\n";
//   summary += selectedExtras.length
//     ? `Extras: ${selectedExtras.join(", ")}\n`
//     : "Extras: None\n";
//   summary += `Delivery Method: ${selectedDelivery}\n`;
//   summary += `Total Price: ${totalPriceDisplay.textContent}\n`;

//   summaryText.textContent = summary;
// };

// button.addEventListener("click", retrieveOrderSummary);
const type = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPriceBanner");
const button = document.getElementById("seeOrder");
const customerName = document.getElementById("customerName");
const summaryText = document.getElementById("summaryText");
const deliveryOptions = document.querySelectorAll(".delivery");
const pancakeForm = document.getElementById("pancakeForm");
const confirmOrderButton = document.getElementById("confirmOrderButton");

let deliveryFee = 0;

const changeHandler = () => {
  const basePrice = parseFloat(type.selectedOptions[0].dataset.price);

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  const deliveryChecked = document.querySelector(".delivery:checked");
  deliveryFee = deliveryChecked ? parseFloat(deliveryChecked.dataset.price) : 0;

  const totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryFee;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeForm.addEventListener("change", changeHandler);

const getToppings = () => {
  const selectedToppings = document.querySelectorAll(".topping:checked");
  return selectedToppings.length === 0
    ? "no toppings"
    : [...selectedToppings]
        .map((t) => t.parentElement.innerText.trim())
        .join(", ");
};

const getExtras = () => {
  const selectedExtras = document.querySelectorAll(".extra:checked");
  return selectedExtras.length === 0
    ? "no extras"
    : [...selectedExtras]
        .map((e) => e.parentElement.innerText.split(" - ")[0].trim())
        .join(", ");
};

const getDelivery = () => {
  const selectedDelivery = document.querySelector(".delivery:checked");
  return selectedDelivery
    ? selectedDelivery.parentElement.innerText.trim()
    : "no delivery method";
};

const retrieveOrderSummary = () => {
  const formattedPancakeType =
    type.selectedOptions[0].innerText.split(" - ")[0];
  const toppings = getToppings();
  const extras = getExtras();
  const deliveryMethod = getDelivery();

  summaryText.textContent = `Order created by ${customerName.value}: ${formattedPancakeType} pancake with ${toppings}, ${extras}. Delivery: ${deliveryMethod}`;

  window.selectedOrder = {
    formattedPancakeType,
    toppings,
    extras,
    deliveryMethod,
    totalPrice: parseFloat(totalPriceDisplay.textContent),
  };
};

button.addEventListener("click", retrieveOrderSummary);

function validateOrderForm() {
  if (customerName.value.trim() === "") {
    alert("Customer's name is required!");
    return false;
  }
  return true;
}

const confirmOrderHandler = () => {
  if (customerName.value.trim() === "") {
    alert("Customer's name is required!");
    return;
  }

  const order = {
    id: Date.now(),
    customerName: customerName.value.trim(),
    selectedPancake: window.selectedOrder.formattedPancakeType,
    toppings: window.selectedOrder.toppings,
    extras: window.selectedOrder.extras,
    deliveryMethod: window.selectedOrder.deliveryMethod,
    totalPrice: window.selectedOrder.totalPrice,
    status: "waiting",
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  console.log(order);

  pancakeForm.reset();
  totalPriceDisplay.textContent = "0€";
  totalPriceBanner.textContent = "0€";
  summaryText.textContent = "";
};

confirmOrderButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (validateOrderForm()) {
    confirmOrderHandler();
    alert("Order confirmed! Check your order at All Orders");
    window.open("allorders.html", "_blank");
  }
});

document.getElementById("allOrdersButton").addEventListener("click", () => {
  window.open("allorders.html", "_blank");
});
