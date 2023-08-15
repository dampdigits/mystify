const line1Text = document.getElementById("line1Text");
const line2Text = document.getElementById("line2Text");
const cursor1 = document.getElementById("cursor1");
const cursor2 = document.getElementById("cursor2");

function typeTextWithDelay(textElement, cursorElement, text, delay) {
    let currentCharIndex = 0;

    function type() {
        if (currentCharIndex <= text.length) {
            textElement.textContent = text.substr(0, currentCharIndex);
            currentCharIndex++;
            setTimeout(type, 100); // Adjust the typing speed here
        }
        else {
            setTimeout(() => {
                cursorElement.style.animation = "blinkCursor 0.6s 3"; // Blink cursor 3 times
                setTimeout(() => {
                    cursorElement.style.animation = "none"; // Stop cursor blinking
                    cursorElement.style.display = "none"; // Hide cursor after blinking
                    if (textElement === line1Text) {
                        typeTextWithDelay(line2Text, cursor2, "I'm Sameer", 0); // Start typing the next line
                    }
                }, 1800); // Cursor blinking time (3 blinks)
            }, delay); // Delay before cursor blinking
        }
    }

    // Start typing animation
    type();
}

// Start typing the first line after the page has loaded
window.onload = () => {
    typeTextWithDelay(line1Text, cursor1, "Hello World!", 0);
};
