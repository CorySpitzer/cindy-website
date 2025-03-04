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
    
    // Book Banner Carousel functionality
    const bookBanner = document.querySelector('.book-banner');
    if (bookBanner) {
        const bookBannerInner = document.querySelector('.book-banner-inner');
        
        // Clone all books and append them to create a continuous scroll
        // This creates a second set of books that will appear after the first set
        // When the animation moves to show the second set, it will look like the first set is continuing
        const books = Array.from(bookBannerInner.querySelectorAll('a'));
        books.forEach(book => {
            const clone = book.cloneNode(true);
            bookBannerInner.appendChild(clone);
        });
        
        // Adjust animation duration based on the number of books
        const totalBooks = books.length;
        const animationDuration = totalBooks * 3; // 3 seconds per book
        bookBannerInner.style.animationDuration = `${animationDuration}s`;
    }
    
    // Make Services dropdown clickable to show dropdown content
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function() {
            this.parentElement.classList.toggle('show-dropdown');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown-content')) {
                const dropdowns = document.querySelectorAll('.dropdown.show-dropdown');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('show-dropdown');
                });
            }
        });
    }
    
    // Check if current page is a service page and add active class to dropdown
    const currentPath = window.location.pathname;
    const servicePages = [
        'get-your-book-done.html',
        'zen-do-ism.html',
        'black-swan-strategies.html',
        'new-service-page.html',
        'another-service-page.html'
    ];
    
    // Check if current page is a service page
    if (servicePages.some(page => currentPath.includes(page))) {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown && !dropdown.classList.contains('active')) {
            dropdown.classList.add('active');
        }
    }
});
