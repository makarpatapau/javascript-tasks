/* Create a variable price and assign it the value 19.56789.
Use .toFixed() to:
Round the price to 2 decimal places.
Round the price to no decimal places.
Print both results using console.log() with messages:
"Price with 2 decimals: 19.57"
"Price with no decimals: 20"
 */
let price = 19.56789;

// Round to 2 decimal places using .toFixed(2)
let priceWithTwoDecimals = price.toFixed(2);

// Round to no decimal places using .toFixed(0)
let priceWithNoDecimals = price.toFixed(0);

// Print the results
console.log("Price with 2 decimals: " + priceWithTwoDecimals);
console.log("Price with no decimals: " + priceWithNoDecimals);
