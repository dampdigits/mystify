// THEME.JS

// Select the button and image
let button = document.querySelector('#themeBtn');
let image = document.querySelector('#themeIcon');

// Switch theme on button click
button.onclick = function() {
    let element = document.body;
    let theme = element.dataset.bsTheme == "light" ? "dark" : "light";
    element.dataset.bsTheme = theme;
    // Switch button image
    let button_image = image.getAttribute('src');
    image.setAttribute('src',
        button_image = button_image == "assets/icons/sun-fill.svg" ?
            "assets/icons/moon-stars-fill.svg" : "assets/icons/sun-fill.svg"
    );
    // save theme preference when user switches theme
    localStorage.setItem('theme', theme);
    localStorage.setItem('button_image', button_image);
};

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', function() {
    let theme = localStorage.getItem('theme');
    let button_image = localStorage.getItem('button_image');
    // Change to preferenced theme
    let element = document.body;
    element.dataset.bsTheme = theme;
    image.setAttribute('src', button_image);
});
