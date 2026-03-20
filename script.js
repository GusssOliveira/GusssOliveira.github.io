document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    const modal = document.getElementById("project-modal");
    const modalDetails = document.getElementById("modal-details");
    const closeModal = document.querySelector(".close-modal");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.dataset.projectId;
            let content = "";

            if (projectId === "rastreio") {
                content = "<h3>Sistema de Rastreamento</h3><p>Detalhamento do projeto: Conexão com API de correios em tempo real utilizando React Hooks e TypeScript para gerenciamento de estado blindado. Inclui autenticação e painel de histórico.</p>";
            } else if (projectId === "ecommerce") {
                content = "<h3>Clone de E-commerce Premium</h3><p>Detalhamento do projeto: Recriação da interface de uma loja de alta conversão. Foco em performance, layout responsivo e transições suaves de imagem utilizando bibliotecas de animação.</p>";
            } else if (projectId === "sitegrande") {
                content = "<h3>Website Institucional Grande</h3><p>Detalhamento do projeto: Meu último grande projeto como freelancer. Arquitetura de front-end escalável para gerenciar múltiplos componentes e dados institucionais, com foco em SEO e acessibilidade.</p>";
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
});