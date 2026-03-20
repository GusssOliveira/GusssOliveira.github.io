document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectUrl = card.dataset.url;

            if (projectUrl) {
                window.open(projectUrl, "_blank");
            }
        });
    });
});