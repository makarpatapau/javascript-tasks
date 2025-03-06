const type = document.querySelector("#type"); // # shows that it is ID
const toppings = document.querySelectorAll(".topping"); // . shows that it is class
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPriceBanner");
const button = document.getElementById("seeOrder");
const customerName = document.getElementById("customerName");
const summaryText = document.getElementById("summaryText");
const deliveryOptions = document.querySelectorAll(".delivery");
const pancakeForm = document.getElementById("pancakeForm");

const changeHandler = (event) => {
  console.log("Event: ", event);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

  console.log("BasePrice: ", basePrice);

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

const retrieveOrderSummary = () => {
  const name = customerName.value || "Unknown Customer";
  const selectedPancake = type.selectedOptions[0].text;
  const selectedToppings = [
    ...document.querySelectorAll(".topping:checked"),
  ].map((topping) => topping.parentElement.textContent.trim());
  const selectedExtras = [...document.querySelectorAll(".extra:checked")].map(
    (extra) => extra.parentElement.textContent.trim()
  );
  const selectedDelivery = [
    ...document.querySelectorAll(".delivery:checked"),
  ].map((delivery) => delivery.parentElement.textContent.trim())[0];

  let summary = `Your name: ${name}\n`;
  summary += `Pancake Type: ${selectedPancake}\n`;
  summary += selectedToppings.length
    ? `Toppings: ${selectedToppings.join(", ")}\n`
    : "Toppings: None\n";
  summary += selectedExtras.length
    ? `Extras: ${selectedExtras.join(", ")}\n`
    : "Extras: None\n";
  summary += `Delivery Method: ${selectedDelivery}\n`;
  summary += `Total Price: ${totalPriceDisplay.textContent}`;

  summaryText.textContent = summary;
};

button.addEventListener("click", retrieveOrderSummary);
