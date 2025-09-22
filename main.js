// --- Animation retrigger for smoothness on every page load ---
window.addEventListener('DOMContentLoaded', () => {
    // List of selectors for animated elements on page load
    const animatedSelectors = [
        '.logo',
        '.navbar a',
        '.home-content h3',
        '.home-content h1',
        '.home-content p',
        '.home-sci a',
        '.btn-box'
    ];
    animatedSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            // Remove and re-add the animation to retrigger
            el.style.animation = 'none';
            // Force reflow
            void el.offsetWidth;
            el.style.animation = '';
        });
    });


    // Typing animation for the "I'm a ..." text
    if (typeof Typed !== 'undefined') {
        new Typed('.text', {
            strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });
    }

    // Mobile & tablet menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
        });
        // Close menu on link click (for mobile/tablet)
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
            });
        });
    }

    // Skill bar animations
    window.addEventListener('scroll', () => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const skillsPos = skillsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (skillsPos < windowHeight - 100) {
                document.querySelectorAll('.progress-line span').forEach(span => {
                    span.style.transform = 'scaleX(1)';
                });
                document.querySelectorAll('.radial-bar .percentage, .radial-bar .text').forEach(el => {
                    el.style.opacity = 1;
                });
            }
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Show "back to top" button on scroll
    const topBtn = document.querySelector('.top');
    if (topBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                topBtn.style.display = 'block';
            } else {
                topBtn.style.display = 'none';
            }
        });
    }
});

