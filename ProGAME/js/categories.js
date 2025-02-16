document.addEventListener("DOMContentLoaded", async () => {
    const categoriesContainer = document.getElementById("categories-container");

    try {
        const response = await fetch("../data/categories.json");
        const categories = await response.json();

        categories.forEach(category => {
            const categoryElement = document.createElement("div");
            categoryElement.classList.add("category");
            categoryElement.textContent = category.name;
            categoryElement.addEventListener("click", () => {
                window.location.href = `game.html?category=${category.id}`;
            });

            categoriesContainer.appendChild(categoryElement);
        });
    } catch (error) {
        console.error("Ошибка загрузки категорий:", error);
    }
});