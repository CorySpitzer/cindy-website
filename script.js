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
});
