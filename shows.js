const videos = [
    {
        title: "Ответ Байдену",
        id: "LnFevXpLF2k",
        desc: "Нашей исследовательской группе была поставлена задача создать инновационный отечественный ответ Байдену. Наши ученые горячо взялись за работу и создали поистине прорывной продукт. Предоставляем вам демонстрацию его способностей.",
        category: "эксперименты"
    },
    {
        title: "Тест Лифта",
        id: "N5c2yXRGIkE",
        desc: "Тест лифта)",
        category: "эксперименты"
    },
    {
        title: "20 Важных Правил",
        id: "Qce6XwV8Ii0",
        desc: "Наше прошлое видео стало самым популярным в интернете. Мы получили множество просьб на нашу электронную почту, которая всегда указана в описании, на них мы решили не отвечать и записали вам двадцать лайфхаков на железной дороге. Приятного просмотра!",
        category: "лайфхаки"
    },
    {
        title: "Проверяем Ответ Байдену",
        id: "l1mK9VyrxHw",
        desc: "ну проверили короче",
        category: "эксперименты"
    },
    {
        title: "Проверяем Ответ Байдену (часать 2)",
        id: "nFGUD7NjO0k",
        desc: "ну допроверили",
        category: "эксперименты"
    },
    {
        title: "Охота На Монстров",
        id: "Nq5szEOads4",
        desc: "ещё шортс",
        category: "хозяйство"
    },
    {
        title: "Скандал вокруг напитка LAVA LAVA",
        id: "3xqqEGl6w8w",
        desc: "Нашей съемочной редакции поступил запрос на разъяснение конфликта между каналом Жизнь Яна и напитком LAVA LAVA. Автор канала Жизнь Яма выражает крайнее недовольство в отношении напитка, наша команда решила разобраться в чем же дело и поставить на место автора канала Жизнь Яда.",
        category: "кухня"
    },
    {
        title: "Чистка Стиральной Машины",
        id: "aMDqItfTCcc",
        desc: "почистил машину",
        category: "хозяйство"
    },
    {
        title: "ЭТИ ЛАЙФХАКИ СПАСУТ ЖИЗНЬ В ЛЕСУ",
        id: "EeLtb7WbQPo",
        desc: "Нашему творческому коллективу кроссовки DEXP™ поступила просьба снять для телеканала Новый новый выпуск лайфхаков в лесу. В этом выпуске вы узнаете несколько хитростей, которые помогут вам выжить в лесу. Наш коллектив кроссовки DEXP™ собирал эти лайфхаки около трёх месяцев, надеемся на вашу поддержку!",
        category: "лайфхаки"
    },
    {
        title: "ЮБИЛЕЙ НА КАНАЛЕ + ОТВЕТЫ НА ВОПРОСЫ",
        id: "Z-reOkl9Kxc",
        desc: "На телеканале стукнул юбилей и мы решили его отпраздновать съев два помидора. Вы задали нам очень много вопросов, поэтому мы решили на них ответить. Примерно все. Я больше вообще ничего говорить не буду, чтоб... Ты не вставил это в описание.",
        category: "all"
    },
    {
        title: "ПРОВЕРКА ВЕЛОСИПЕДНОГО ПОДСТВОЛЬНИКА",
        id: "omfKGMnTC1M",
        desc: "ещё раз проверяем подствольник велосипедный",
        category: "эксперименты"
    },
    {
        title: "РЕМОНТ УНИТАЗНОГО ИЗДЕЛИЯ",
        id: "yktiUrkttn4",
        desc: "В нашу съемочную редакцию всё чаще поступают письма с просьбой показать ремонт сливного бачка унитаза. За это ответственное дело взялся наш специалист по ремонту бытовых изделий Виктор Курча. В новой передаче, под названием ХОЗЯЙСКИЙ САБАТОН, Виктор покажет вам, как разобрать бачок унитаза, как его очистить, как заменить прокладку, и как всё собрать в обратном порядке. Наша съемочная редакция не знает, что ещё написать, поэтому она приступает к съемке следующей передачи.",
        category: "хозяйство"
    }
];

// Элементы DOM
const grid = document.getElementById("video-grid");
const modal = document.getElementById("videoModal");
const modalIframe = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close-btn");

// Создаем элементы для заголовка и описания в модалке
const modalTitle = document.createElement("h2");
const modalDesc = document.createElement("p");

// Вставляем их в модалку перед iframe
const modalContent = modal.querySelector(".modal-content");
modalContent.insertBefore(modalTitle, modalIframe);
modalContent.insertBefore(modalDesc, modalIframe.nextSibling);

// Функция создания карточки видео
function createCard(video) {
    const card = document.createElement("div");
    card.className = "video-card";
    card.dataset.category = video.category;
    card.innerHTML = `
    <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}">
    <h3>${video.title}</h3>
    <p>${video.desc}</p>
  `;

    card.addEventListener("click", () => {
        modal.style.display = "flex";
        modalIframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
        modalTitle.textContent = video.title;
        modalDesc.textContent = video.desc;
    });

    return card;
}

// Заполняем грид карточками
videos.forEach(video => {
    grid.appendChild(createCard(video));
});

// Фильтрация видео по категории
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;

        document.querySelectorAll(".video-card").forEach(card => {
            card.style.display = (filter === "all" || card.dataset.category === filter) ? "block" : "none";
        });
    });
});

// Функция закрытия модалки
function closeModal() {
    modal.style.display = "none";
    modalIframe.src = "";
    modalTitle.textContent = "";
    modalDesc.textContent = "";
}

// События закрытия модалки
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});