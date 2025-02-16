document.addEventListener("DOMContentLoaded", async () => {
    const gamesContainer = document.getElementById("games-container");
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get("category");

    try {
        const response = await fetch("../data/games.json");
        const games = await response.json();
        
        const filteredGames = games.filter(game => game.category === selectedCategory);

        filteredGames.forEach(game => {
            const gameElement = document.createElement("div");
            gameElement.classList.add("game");
            gameElement.innerHTML = `
                <img src="../assets/images/${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
                <button onclick="window.location.href='${game.url}'">Играть</button>
            `;
            gamesContainer.appendChild(gameElement);
        });
    } catch (error) {
        console.error("Ошибка загрузки игр:", error);
    }
});