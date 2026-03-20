document.addEventListener("DOMContentLoaded", () => {
    const clickableCards = document.querySelectorAll(".clickable-card");

    clickableCards.forEach(card => {
        card.addEventListener("click", () => {
            const url = card.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
});