const currencySelect = document.getElementById("currency-select");
const currencyConvert = document.getElementById("currency-convert");
const amount = document.getElementById("amount");
const displayAmount = document.getElementById("display-amount");
const host = 'api.frankfurter.app';
displayAmount.readOnly = true;

fetch(`https://${host}/currencies`)
  .then(res => res.json())
  .then((data) => {
    const currencies = data;
    const keys = Object.keys(currencies);
    console.log(keys);

    keys.forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency;
      option.textContent = `${currency} - ${currencies[currency]}`;
      currencySelect.appendChild(option);


    });

    keys.forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency;
      option.textContent = `${currency} - ${currencies[currency]}`;
      currencyConvert.appendChild(option);
    });
  });

const fetchButton = document.getElementById("fetch-button");

fetchButton.addEventListener("click", () => {
  const host = 'api.frankfurter.app';
  const fromCurrency = currencySelect.value;
  const toCurrency = currencyConvert.value;

const amountConversion = amount.value

  fetch(`https://${host}/latest?amount=${amountConversion}&from=${fromCurrency}&to=${toCurrency}`)
    .then(resp => resp.json())
    .then((data) => {
      const conversionRate = data.rates[toCurrency];
      const convertedAmount = `${(conversionRate).toFixed(2)} ${toCurrency}`;
      displayAmount.value = convertedAmount;
      amount.setAttribute("type", "text");
      amount.value += ` ${fromCurrency}`
      amount.readOnly= true;
      displayAmount.readOnly = true;
    });
});

// Get the reset button element
const resetButton = document.getElementById("reset-button");

// Add a click event listener to the reset button
resetButton.addEventListener("click", function() {
    // Clear the selected currency and amount values
  
    document.getElementById("amount").value = "";
 
    document.getElementById("display-amount").value = "";
    amount.readOnly= false;
});

const currentDate = new Date();

const dateElement = document.getElementById('date');

dateElement.innerText = currentDate.toDateString();