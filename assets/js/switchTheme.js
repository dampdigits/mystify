// theme.js

// Select theme button
let button = document.querySelector('#themeBtn');
// Select theme button icon
let theme_button_icon = document.querySelector('#themeIcon');
// Get all carousel control buttons
let buttons = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');

// Switch theme on button click
button.onclick = function() {
    // Switch webpage theme
    let element = document.body;
    let theme = element.dataset.bsTheme === "light" ? "dark" : "light";
    element.dataset.bsTheme = theme;

    // Switch button theme_button_icon
    let button_icon = "";
    if (theme === "light") {
        button_icon = "assets/icons/themes/moon-stars-fill.svg";
    } else {
        button_icon = "assets/icons/themes/sun-fill.svg";
    }
    theme_button_icon.setAttribute('src', button_icon);

    let carousel_button_color = theme === "light" ? "grey" : "white";
    // Change color of carousel buttons
    buttons.forEach(function(carouselButton) {
        carouselButton.style.backgroundColor = carousel_button_color;
    });

    // Save theme preference when user switches theme
    localStorage.setItem('theme', theme);
    localStorage.setItem('theme_button_icon', button_icon);
    localStorage.setItem('carousel_button_color',carousel_button_color);
};

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', function() {
    let theme = localStorage.getItem('theme');
    let button_icon = localStorage.getItem('theme_button_icon');
    let carousel_button_color = localStorage.getItem('carousel_button_color');

    // Change to preferenced theme
    if (theme != null) {
        let element = document.body;
        element.dataset.bsTheme = theme;
    }
    if (button_icon != null) {
        theme_button_icon.setAttribute('src', button_icon);
    }
    if (carousel_button_color != null) {
        buttons.forEach(function(carouselButton) {
            carouselButton.style.backgroundColor = carousel_button_color;
        });
    }
});
