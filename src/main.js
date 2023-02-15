const selector = document.getElementById("select-moedas");
const button = document.getElementById("botao-pesquisar");
const h2 = document.getElementById("resultado");
const span = document.getElementById("moeda");

const appId = "5b10aca265044cefbfb708e9950058eb";
const url = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const rates = data.rates;

    for (const currency in rates) {
      const option = document.createElement("option");
      option.text = currency;
      option.value = currency;
      selector.appendChild(option);
    }

    button.addEventListener("click", (event) => {
      event.preventDefault();
      const selectorValue = selector.value;

      h2.innerText = `💵 ${rates[selectorValue].toFixed(2)}`;
      span.innerText = selectorValue;
    });
  })
  .catch((error) => console.error(error));
