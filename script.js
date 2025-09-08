// Example: Simple Greeting Alert when page loads
window.addEventListener('load', function() {
    alert("Welcome to Jeevan Kishor's Portfolio Website!");
});

// Example: Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
