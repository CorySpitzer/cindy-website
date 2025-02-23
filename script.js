document.addEventListener('DOMContentLoaded', function() {
    // alert('JavaScript is loaded');
    var hamburger = document.getElementById('hamburger');
    console.log('Hamburger element:', hamburger);
    var navMenu = document.getElementById('nav-menu');
    console.log('Nav menu element:', navMenu);
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // alert('Hamburger clicked');
            console.log('Hamburger menu clicked');
            if (navMenu) {
                navMenu.classList.toggle('active');
                console.log('Nav menu class list after toggle:', navMenu.classList);
            }
        });
    }

    // Dark mode toggle
    function initTheme() {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
        updateThemeIcon(theme);
    }

    function updateThemeIcon(theme) {
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    document.querySelector('.theme-toggle').addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // Initialize theme on page load
    initTheme();
});
