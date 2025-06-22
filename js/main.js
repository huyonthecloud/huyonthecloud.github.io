// Main JavaScript file for Huy On The Cloud's Personal Website

document.addEventListener('DOMContentLoaded', function () {
    // Navigation menu toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // Form submission handler
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // In a real implementation, you would send the form data to a backend
            // For now, we'll just show a success message
            const formData = new FormData(contactForm);
            const formValues = {};

            formData.forEach((value, key) => {
                formValues[key] = value;
            });

            console.log('Form submitted with values:', formValues);

            // Simple success message
            contactForm.innerHTML = `
                <div class="success-message">
                    <h3>Thank you for your message!</h3>
                    <p>I'll get back to you as soon as possible.</p>
                </div>
            `;

            // Style for the success message
            const successMessage = contactForm.querySelector('.success-message');
            if (successMessage) {
                successMessage.style.textAlign = 'center';
                successMessage.style.padding = '30px';
                successMessage.style.backgroundColor = 'rgba(46, 196, 182, 0.1)';
                successMessage.style.borderRadius = '5px';
                successMessage.style.color = 'var(--success-color)';
            }
        });
    }

    // Add animation to skill bars when they come into view
    const skillLevels = document.querySelectorAll('.skill-level');

    const animateSkills = () => {
        skillLevels.forEach(skill => {
            const skillPosition = skill.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (skillPosition < screenPosition) {
                skill.style.width = skill.style.width;
            } else {
                skill.style.width = '0';
            }
        });
    };

    // Initial call to animateSkills
    animateSkills();

    // Animate skills on scroll
    window.addEventListener('scroll', animateSkills);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });    // Add a typing effect to the hero heading
    const heroHeading = document.querySelector('.hero h1');

    if (heroHeading) {
        // Store the original content
        const originalContent = heroHeading.innerHTML;

        // Extract the text without the span
        const beforeSpan = "Hi, I'm ";
        const spanContent = heroHeading.querySelector('.highlight').textContent;

        // Clear the heading content
        heroHeading.innerHTML = '';

        // Create a span element for the highlight
        const highlightSpan = document.createElement('span');
        highlightSpan.className = 'highlight';
        highlightSpan.textContent = spanContent;

        // Type the text before the span
        let i = 0;
        const typeWriter = () => {
            if (i < beforeSpan.length) {
                heroHeading.innerHTML += beforeSpan.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // After typing the text, append the span
                heroHeading.appendChild(highlightSpan);
            }
        };

        // Start the typing effect
        typeWriter();
    }
});
