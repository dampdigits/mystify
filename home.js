const lines = document.querySelectorAll(".line");
const cursors = document.querySelectorAll(".cursor");
const typingTexts = document.querySelectorAll(".typing-text");

function typeText(textElement, cursorElement) {
    const text = textElement.textContent;
    let currentCharIndex = 0;

    function type() {
        if (currentCharIndex <= text.length) {
            textElement.textContent = text.substr(0, currentCharIndex);
            currentCharIndex++;
            setTimeout(type, 100); // Adjust the typing speed here
        }
        else {
            cursorElement.style.display = "none"; // Hide cursor after typing
        }
    }

    // Start typing animation
    type();
}

for (let i = 0; i < lines.length; i++) {
    const textElement = typingTexts[i];
    const cursorElement = cursors[i];
    typeText(textElement, cursorElement);
}
