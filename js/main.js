document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const sidebar = document.getElementById("sidebar");

    // Открытие боковой панели на ПК (при наведении)
    sidebar.addEventListener("mouseenter", () => {
        sidebar.classList.add("open");
    });

    sidebar.addEventListener("mouseleave", () => {
        sidebar.classList.remove("open");
    });

    // Открытие боковой панели на мобильных (по нажатию кнопки)
    menuButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
});
