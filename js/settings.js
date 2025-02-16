document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language-selector");

    // Установка текущего языка
    const currentLang = localStorage.getItem("language") || "ru";
    languageSelector.value = currentLang;
    changeLanguage(currentLang);

    // Изменение языка
    languageSelector.addEventListener("change", (event) => {
        const newLang = event.target.value;
        localStorage.setItem("language", newLang);
        changeLanguage(newLang);
    });
});

function changeLanguage(lang) {
    fetch(`../data/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll("[data-lang-key]").forEach(el => {
                const key = el.getAttribute("data-lang-key");
                if (data[key]) {
                    el.textContent = data[key];
                }
            });
        })
        .catch(error => console.error("Ошибка загрузки перевода:", error));
}