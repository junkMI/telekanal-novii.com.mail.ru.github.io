const products = [
    {
        title: "Футболка «А монстры»",
        desc: "Распродана со страху до 2008 года",
    },
    {
        title: "Футболка «Котик котик»",
        desc: "Лучшая одежда на 14 февраля для всех милых парочек",
    },
    {
        title: "Футболка «Кроссовки дексп»",
        desc: "Официальная футболочка творческого объединения «Кроссовки дексп»",
    },
    {
        title: "Футболка «Рецепт велосипедного подствольника»",
        desc: "По многочисленным просьбам раскрыт состав отечественного изобретения",
    },
];

const sliderTrack = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Генерация карточек
function renderProducts() {
    sliderTrack.innerHTML = "";

    for (let i = currentIndex; i < currentIndex + 2; i++) {
        const product = products[i % products.length];

        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
  <div class="product-img">[ Фото футболки ]</div>
  <h3>${product.title}</h3>
  <p>${product.desc}</p>
  <button class="buy-button" onclick="openForm()">Заказать прямо сейчас!</button>
`;

        sliderTrack.appendChild(card);
    }
}

// Навигация
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 2 + products.length) % products.length;
    renderProducts();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 2) % products.length;
    renderProducts();
});

// Форма покупки
function openForm() {
    document.getElementById("buyFormBackdrop").style.display = "flex";
}

function closeForm() {
    document.getElementById("buyFormBackdrop").style.display = "none";
}

renderProducts();
