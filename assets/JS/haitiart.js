
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-quien-somos');
    const btnQuienSomos = document.getElementById('btn-quien-somos');
    const closeModal = document.querySelector('.close-modal');

    function openModal() {
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        btnQuienSomos.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        setTimeout(() => closeModal.focus(), 100);
    }

    function closeModalFunc() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        btnQuienSomos.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
        btnQuienSomos.focus();
    }

    if (btnQuienSomos && modal && closeModal) {
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('role', 'dialog');
        btnQuienSomos.setAttribute('aria-expanded', 'false');
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


        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModalFunc();
            }
        });
    }

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

    const btnContacto = document.getElementById('btn-contacto');
    const contactoSection = document.getElementById('contacto');
    if (btnContacto && contactoSection) {
        btnContacto.addEventListener('click', function(e) {
            e.preventDefault();
            contactoSection.classList.remove('hidden');
            contactoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    const planesData = [
        {
            tipo: 'Casa Moderna',
            descripcion: 'Casa de 3 habitaciones con diseño contemporáneo',
            precio: 290990,
            pagos: ['Visa', 'Mastercard', 'Efectivo', 'Transferencia', 'Crypto']
        },
        {
            tipo: 'Edificio 10 Pisos',
            descripcion: 'Edificio residencial con 40 unidades',
            precio: 1299990,
            pagos: ['Visa', 'Mastercard', 'Efectivo', 'Transferencia', 'Crypto']
        },
        {
            tipo: 'Edificio 22 Pisos Premium',
            descripcion: 'Rascacielos de lujo con 88 unidades',
            precio: 5590990,
            pagos: ['Visa', 'Mastercard', 'Efectivo', 'Transferencia', 'Crypto']
        }
    ];

    const planosGrid = document.getElementById('planos-grid');
    const formatPrecio = (value) => '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    const renderPlanes = () => {
        if (!planosGrid) return;
        planosGrid.innerHTML = planesData.map(plan => `
            <div class="plano-card">
                <div class="plano-tipo">${plan.tipo}</div>
                <div class="plano-info">
                    <p><strong>Descripción:</strong> ${plan.descripcion}</p>
                    <p><strong>Precio:</strong> ${formatPrecio(plan.precio)}</p>
                </div>
                <div class="pagos">
                    <button class="comprar-btn">Comprar</button>
                    <div class="pago-options hidden">
                        ${plan.pagos.map(pago => `<span class="pago-option">${pago}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    };

    renderPlanes();

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

    const comprarBtns = document.querySelectorAll('.comprar-btn');
    comprarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const pagoOptions = this.nextElementSibling;
            pagoOptions.classList.toggle('hidden');
        });
    });

    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }


    const tipoRadios = document.querySelectorAll('input[name="tipo"]');
    const empresaGroup = document.getElementById('empresa-group');
    const clienteForm = document.getElementById('cliente-form');

    tipoRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'empresa') {
                empresaGroup.style.display = 'block';
            } else {
                empresaGroup.style.display = 'none';
            }
        });
    });

    if (clienteForm) {
        clienteForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            if (!data.nombre || !data.edad || !data.sexo || !data.ubicacion || !data.tipo) {
                alert('Por favor, completa todos los campos obligatorios.');
                return;
            }

            alert('¡Gracias ' + data.nombre + '! Tu registro ha sido enviado exitosamente.\n\nTipo: ' + (data.tipo === 'natural' ? 'Persona Natural' : 'Representante de Empresa') + '\nEdad: ' + data.edad + '\nSexo: ' + data.sexo + '\nUbicacion: ' + data.ubicacion + (data.empresa ? '\nEmpresa: ' + data.empresa : '') + (data.resena ? '\nResena: ' + data.resena : ''));

            this.reset();
            empresaGroup.style.display = 'none';
        });
    }
});