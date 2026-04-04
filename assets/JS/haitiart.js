// HAITIART - JavaScript funcionalidad básica

// Modal Quién Somos
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-quien-somos');
    const btnQuienSomos = document.getElementById('btn-quien-somos');
    const closeModal = document.querySelector('.close-modal');

    if (btnQuienSomos && modal && closeModal) {
        // Abrir modal
        btnQuienSomos.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        });

        // Cerrar modal con X
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Cerrar modal haciendo click fuera
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
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

    // Lazy loading básico para imágenes (si se agregan en el futuro)
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
});
