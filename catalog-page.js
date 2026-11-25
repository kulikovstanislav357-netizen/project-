const catalogItems = [
  {
    position: 1,
    name: "Хлорофитум",
    specs: "Высота 25 см · рассеянный свет",
    description: "Лёгкие листья для подвесной полки",
    image: "images/item1.png"
  },
  {
    position: 2,
    name: "Фикус",
    specs: "Высота 40 см · яркий свет",
    description: "Зелёные листья для просторного места",
    image: "images/item1.png"
  },
  {
    position: 3,
    name: "Сансевиерия",
    specs: "Высота 30 см · полутень",
    description: "Компактное растение для рабочего стола",
    image: "images/item1.png"
  }
];

const listContainer = document.querySelector("#catalog-list");
const searchInput = document.querySelector("#search");
const statusText = document.querySelector("#status");

function renderCatalog(items) {
  if (!listContainer) return;
  listContainer.replaceChildren();

  for (const item of items) {
    const card = document.createElement("article");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "plant-img";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const specs = document.createElement("p");
    specs.textContent = item.specs;

    const desc = document.createElement("p");
    desc.textContent = item.description;

    card.append(img, title, specs, desc);
    listContainer.append(card);
  }

  if (statusText) {
    statusText.textContent = items.length > 0
      ? `Найдено позиций: ${items.length}`
      : "По вашему запросу ничего не найдено";
  }
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = catalogItems.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    renderCatalog(filtered);
  });
}

renderCatalog(catalogItems);
