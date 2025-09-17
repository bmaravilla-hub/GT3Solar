/**
 * SCROLL-ANIMATIONS.JS
 * Animaciones suaves al hacer scroll para GT3 Solar
 * Versión: 1.1 - Solo efectos de aparición
 */

document.addEventListener('DOMContentLoaded', function() {
    // Configuración del observador
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    // Función para animar elementos
    function animateElements(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agregar clase de animación con delay progresivo
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'all 0.6s ease-out';
                }, delay);
                
                // Dejar de observar después de animar
                observer.unobserve(entry.target);
            }
        });
    }

    // Crear observador
    const observer = new IntersectionObserver(animateElements, observerOptions);

    // Elementos a animar (solo los más importantes)
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .feature-card, .testimonial-card, ' +
        '.project-card, .principle-card, .timeline-item, ' +
        '.section-header, .why-choose-header, .projects-header'
    );

    // Configurar estado inicial y observar
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        observer.observe(element);
    });

    // Animación especial para hero (si existe)
    const heroContent = document.querySelector('.hero-section .container');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});