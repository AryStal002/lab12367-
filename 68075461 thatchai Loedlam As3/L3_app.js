// Assignment 3 Script
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const counterDisplay = document.getElementById('counter');
    const digitDisplay = document.getElementById('digitCounter');

    textInput.addEventListener('input', (e) => {
        const text = e.target.value;
        const currentLength = text.length;
        const digitCount = (text.match(/\d/g) || []).length;

        counterDisplay.textContent = currentLength;
        digitDisplay.textContent = `จำนวนตัวเลข: ${digitCount}`;

        // Optional: Add a little animation bump when typing
        counterDisplay.style.transform = 'scale(1.1)';
        setTimeout(() => {
            counterDisplay.style.transform = 'scale(1)';
        }, 100);
    });
});
