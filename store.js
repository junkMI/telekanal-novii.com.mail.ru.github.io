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

const mobileProducts = [
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

function getCurrentSource() {
    return window.innerWidth <= 768 ? mobileProducts : products;
}

function getCardsToShow() {
    return window.innerWidth <= 768 ? 1 : 2;
}

function renderProducts() {
    const source = getCurrentSource();
    const cardsToShow = getCardsToShow();

    sliderTrack.innerHTML = "";

    for (let i = 0; i < cardsToShow; i++) {
        const index = (currentIndex + i) % source.length;
        const product = source[index];

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

function moveSlide(direction) {
    const source = getCurrentSource();
    const maxIndex = source.length;
    const cardsToShow = getCardsToShow();

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = maxIndex - cardsToShow;
    } else if (currentIndex >= maxIndex) {
        currentIndex = 0;
    }

    renderProducts();
}

// Кнопки
prevBtn.addEventListener("click", () => moveSlide(-1));
nextBtn.addEventListener("click", () => moveSlide(1));

// Адаптив: сброс текущего индекса при изменении размера экрана
let lastIsMobile = window.innerWidth <= 768;
window.addEventListener("resize", () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile !== lastIsMobile) {
        currentIndex = 0;
        lastIsMobile = isMobile;
        renderProducts();
    }
});

// Первичный рендер
renderProducts();

// Форма покупки
function openForm() {
    document.getElementById("buyFormBackdrop").style.display = "flex";
}

function closeForm() {
    document.getElementById("buyFormBackdrop").style.display = "none";
}

renderProducts();
