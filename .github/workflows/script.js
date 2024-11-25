// Script to generate the falling Matrix code effect

const matrixRain = document.getElementById('matrixRain');
const characters = ['|', '/', '\\', '!', '@', '#', '$', '%', '&', '*', '1', '0', '2', '3', '4', '5', '6', '7', '8', '9'];

function createFallingCode() {
    // Randomly choose a character from the list
    const char = characters[Math.floor(Math.random() * characters.length)];
    const xPosition = Math.floor(Math.random() * window.innerWidth);
    const delay = Math.random() * 5;

    const fallingCodeElement = document.createElement('div');
    fallingCodeElement.classList.add('falling-code');
    fallingCodeElement.style.left = `${xPosition}px`;
    fallingCodeElement.style.animationDelay = `${delay}s`;
    fallingCodeElement.textContent = char;

    matrixRain.appendChild(fallingCodeElement);

    // Remove the element after animation ends
    setTimeout(() => {
        matrixRain.removeChild(fallingCodeElement);
    }, 5000); // Matches animation duration
}

// Continuously generate falling code
setInterval(createFallingCode, 50); // Create a new falling code every 50ms
