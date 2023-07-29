const amountInput = document.querySelector("#amount");
const firstCurrency = document.querySelector("#firstCurrencyOption");
const secondCurrency = document.querySelector("#secondCurrencyOption");
const result = document.querySelector("#result");
runEventListener();
const currency = new Currency();

function runEventListener() {
  amountInput.addEventListener("input", exchange);
}
function exchange(e) {
  const amount = Number(amountInput.value.trim());
  const firstCurrencyValue =
    firstCurrency.options[firstCurrency.selectedIndex].textContent;
  const secondCurrencyValue =
    secondCurrency.options[secondCurrency.selectedIndex].textContent;
  currency
    .exchange(amount, firstCurrencyValue, secondCurrencyValue)
    .then((response) => {
      result.value = response.toFixed(2);
    });
}
