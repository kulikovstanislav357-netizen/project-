const unitValue = 500;
const extraValue = 150;

function getResult(quantityText, unitValue, extraValue) {
  const cleaned = String(quantityText).trim();

  if (cleaned === "") {
    return "Укажите количество";
  }

  const quantity = Number(cleaned);

  if (Number.isNaN(quantity)) {
    return "Введите число";
  }

  if (!Number.isInteger(quantity) || quantity < 1) {
    return "Количество должно быть целым числом от 1";
  }

  const total = quantity * unitValue + extraValue;
  return "Итого: " + total + " руб.";
}

const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const quantityText = document.querySelector("#quantity").value;
  const select = document.querySelector("#item");
  const itemName = select.options[select.selectedIndex].text;

  const message = getResult(quantityText, unitValue, extraValue);
  result.textContent = itemName + ". " + message;
});
