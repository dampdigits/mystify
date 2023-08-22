// Select the button and image
let button = document.querySelector('#themeBtn');
let image = document.querySelector('#themeIcon');

// Add onclick event to the button
button.onclick = function() {
    let element = document.body;
    element.dataset.bsTheme =
        element.dataset.bsTheme == "light" ? "dark" : "light";
    // Check the current src of the image and change it
    if (image.getAttribute('src') == "assets/icons/sun-fill.svg") {
        image.setAttribute('src', "assets/icons/moon-stars-fill.svg");
    } else {
        image.setAttribute('src', "assets/icons/sun-fill.svg");
    }
};
