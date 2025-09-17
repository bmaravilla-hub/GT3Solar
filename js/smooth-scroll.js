/**
 * SMOOTH-SCROLL.JS
 * Desplazamiento suave para enlaces internos
 * Versión: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces con hash
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calcular posición consideriendo navbar fijo
                const navbarHeight = document.querySelector('.custom-navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                // Scroll suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});