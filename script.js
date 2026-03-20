document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    const modal = document.getElementById("project-modal");
    const modalDetails = document.getElementById("modal-details");
    const closeModal = document.querySelector(".close-modal");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.dataset.projectId;
            let content = "";

            if (projectId === "carmini") {
                content = "<h3>Carmini</h3><p>Detalhamento do projeto: Desenvolvimento do site Carmini, um e-commerce de skincare de luxo, com foco em performance, responsividade e SEO.</p><p><a href='https://carmini.co/' target='_blank'>Visitar o site</a></p>";
            } else if (projectId === "rastreio") {
                content = "<h3>Sistema de Rastreamento Simplificado</h3><p>Detalhamento do projeto: Conexão com API de correios em tempo real utilizando React Hooks e TypeScript para gerenciamento de estado blindado.</p>";
            } else if (projectId === "ecommerce") {
                content = "<h3>Clone de E-commerce Premium</h3><p>Detalhamento do projeto: Recriação da interface de uma loja de alta conversão. Foco em performance, layout responsivo e transições suaves de imagem utilizando bibliotecas de animação.</p>";
            }

            modalDetails.innerHTML = content;
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
})