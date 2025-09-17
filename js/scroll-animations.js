/**
 - Solo efectos de aparición
 */

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    function animateElements(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'all 0.6s ease-out';
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(animateElements, observerOptions);
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .feature-card, .testimonial-card, ' +
        '.project-card, .principle-card, .timeline-item, ' +
        '.section-header, .why-choose-header, .projects-header'
    );

    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        observer.observe(element);
    });

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
