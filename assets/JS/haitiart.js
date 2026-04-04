// HAITIART - JavaScript funcionalidad mejorada
// Versión 1.2 - Modal con accesibilidad y UX mejorada

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-quien-somos');
    const btnQuienSomos = document.getElementById('btn-quien-somos');
    const closeModal = document.querySelector('.close-modal');

    // Función para abrir modal con accesibilidad mejorada
    function openModal() {
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        btnQuienSomos.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';

        // Focus en el botón de cerrar
        setTimeout(() => closeModal.focus(), 100);
    }

    // Función para cerrar modal
    function closeModalFunc() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        btnQuienSomos.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
        btnQuienSomos.focus();
    }

    if (btnQuienSomos && modal && closeModal) {
        // Configurar accesibilidad
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('role', 'dialog');
        btnQuienSomos.setAttribute('aria-expanded', 'false');

        // Event listeners
        btnQuienSomos.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });

        closeModal.addEventListener('click', closeModalFunc);

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });

        // Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModalFunc();
            }
        });
    }

    // Smooth scroll para navegación
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Lazy loading básico para imágenes futuras
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Animación de entrada para las tarjetas de planos
    const planoCards = document.querySelectorAll('.plano-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    planoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
});