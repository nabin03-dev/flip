// Function to create the typewriter effect for the text
function typewriterEffect(element, text, speed) {
    let index = 0;  // Initialize index to track the position in the text

    // Function to type out each character one by one
    function type() {
        // If there are still characters left to type
        if (index < text.length) {
            // Add the current character to the element
            element.textContent += text.charAt(index);
            index++;
            // Delay the next character typing
            setTimeout(type, speed);
        }
    }

    // Start the typing process
    type();
}

// Function to be called when the card is opened (checkbox checked)
function onCardOpen() {
    const textElement = document.getElementById('text-one');
    textElement.textContent = '';  // Clear existing text

    // Define the text you want to display with line breaks preserved
    const text = `
        WHEN YOU FEEL SAD
        REMEMBER THAT YOU
        HAVE ME, OK? I MAY NOT BE MUCH, BUT I WILL ALWAYS BE BY YOUR SIDE.
    `;

    // Start the typewriter effect with the element, text, and typing speed (in milliseconds)
    typewriterEffect(textElement, text, 90);
}

// Attach an event listener to the checkbox input to call onCardOpen() when the card is opened
document.getElementById('open').addEventListener('change', function() {
    if (this.checked) {
        onCardOpen();
    }
});
