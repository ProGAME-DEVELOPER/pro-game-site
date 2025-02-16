document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.altKey && event.key === "A") {
        const password = prompt("Введите пароль администратора:");
        if (password === "admin123") {
            window.location.href = "admin-panel.html";
        } else {
            alert("Неверный пароль!");
        }
    }
});

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.altKey && event.key === "A") {
        const password = prompt("Введите пароль администратора:");
        if (password === "admin123") {
            window.location.href = "admin-panel.html";
        } else {
            alert("Неверный пароль!");
        }
    }
});

// Добавление новой игры
document.getElementById("add-game-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("game-name").value;
    const category = document.getElementById("game-category").value;
    const image = document.getElementById("game-image").value;
    const url = document.getElementById("game-url").value;

    const newGame = { name, category, image, url };

    try {
        const response = await fetch("/api/games", {
            method: "POST",
            body: JSON.stringify(newGame),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            alert("Игра добавлена!");
            window.location.reload();
        } else {
            throw new Error("Ошибка при добавлении игры");
        }
    } catch (error) {
        console.error("Ошибка при добавлении игры:", error);
    }
});