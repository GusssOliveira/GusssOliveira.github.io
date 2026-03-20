document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".clickable-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const url = card.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
});