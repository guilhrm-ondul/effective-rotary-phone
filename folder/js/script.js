document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }


    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            themeToggle.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
        });
    }

    const readMoreBtn = document.getElementById('read-more-btn');
    const moreBio = document.getElementById('more-bio');

    if (readMoreBtn && moreBio) {
        readMoreBtn.addEventListener('click', () => {
            moreBio.classList.toggle('show');
            readMoreBtn.textContent = moreBio.classList.contains('show') ? 'Mostrar menos' : 'Mostrar mais';
        });
    }


    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (!nome || !email || !mensagem) {
                formFeedback.style.color = 'red';
                formFeedback.textContent = 'Por favor, preencha todos os campos do formulário.';
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formFeedback.style.color = 'red';
                formFeedback.textContent = 'Por favor, insira um e-mail válido.';
                return;
            }

            formFeedback.style.color = 'green';
            formFeedback.textContent = 'Mensagem enviada com sucesso!';
            contactForm.reset();
        });
    }


    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
