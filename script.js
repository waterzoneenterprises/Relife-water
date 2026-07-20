// ===== Performance Optimizations =====

// Lazy loading for images and sections
document.addEventListener('DOMContentLoaded', function() {
    console.log('Relife Website Loaded Successfully');
    
    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe all cards and sections
        document.querySelectorAll('.card, .why-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Performance monitoring
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('Page Load Time: ' + pageLoadTime + 'ms');
            }, 0);
        });
    }
});

// Prevent layout shift
document.addEventListener('readystatechange', function() {
    if (document.readyState === 'interactive') {
        console.log('DOM fully loaded and parsed');
    }
});

// Handle mobile menu interactions
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('tel:')) {
        console.log('Phone call initiated');
    }
    if (e.target.getAttribute('href') && e.target.getAttribute('href').includes('whatsapp')) {
        console.log('WhatsApp opened');
    }
});
