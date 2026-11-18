const catalog = [
  {
    position: 1,
    name: "Хлорофитум",
    specs: "Высота 25 см · рассеянный свет",
    description: "Лёгкие листья для подвесной полки"
  },
  {
    position: 2,
    name: "Фикус",
    specs: "Высота 40 см · яркий свет",
    description: "Зелёные листья для просторного места"
  },
  {
    position: 3,
    name: "Сансевиерия",
    specs: "Высота 30 см · полутень",
    description: "Компактное растение для рабочего стола"
  }
];

function getResult(item, count = 1) {
  if (!item) {
    return "Запись не найдена";
  }
  return `Выбрано: ${item.name} (${count} шт.) — ${item.specs}`;
}

function filterByText(items, query) {
  const normalized = String(query).trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

function findByPosition(items, position) {
  return items.find(item => item.position === position);
}

const status = document.querySelector("#status");
const namesList = document.querySelector("#names");
const showButton = document.querySelector("#show-names");

if (status && namesList) {
  const first = catalog[0].name;
  status.textContent = first + " — " + catalog.length + " записей";
}

function renderNames() {
  if (!namesList) return;
  namesList.replaceChildren();
  for (const item of catalog) {
    const line = document.createElement("li");
    line.textContent = item.name;
    namesList.append(line);
  }
}

if (showButton) {
  showButton.addEventListener("click", function () {
    renderNames();
    if (status) {
      status.textContent = "Список показан";
    }
  });
}
