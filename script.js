// Hide preloader on window load
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
});

// CTA button click
document.getElementById('cta-button').addEventListener('click', function () {
    alert('Thanks for getting started! 🚀');
});

// Contact form submission (FORMSPREE)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking on a link (for mobile)
const navLinkItems = document.querySelectorAll('.nav-links a');

navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        document.body.classList.remove('menu-open');
    });
});