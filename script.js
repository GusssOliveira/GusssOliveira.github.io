document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card-carmini");
    if (card) {
        card.addEventListener("click", () => {
            window.open("https://carmini.co/", "_blank");
        });
    }
});