const greetingText = document.getElementById("greetingText");
const lines = greetingText.getElementsByClassName("line");
const cursor = document.getElementById("cursor");

let currentLineIndex = 0;

function typeLine() {
    if (currentLineIndex < lines.length) {
        lines[currentLineIndex].style.animation = "typing 2s steps(" + lines[currentLineIndex].textContent.length + ")";
        currentLineIndex++;
        setTimeout(typeLine, 2500); // Adjust the delay between lines
    }
    else {
    cursor.style.display = "none"; // Hide cursor after typing
    }
}

// Start typing animation
typeLine();