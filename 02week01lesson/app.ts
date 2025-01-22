// Initial count value
let count = 0;

// Update the count display
const updateCountDisplay = ():void => {
    const countElement = document.getElementById('count');
    if (!countElement) {
        return;
    }
    countElement.textContent = count.toString();
};

// Increment the count
const increment = ():void => {
    count += 1;
    updateCountDisplay();
};

// Decrement the count
const decrement = ():void => {
    count -= 1;
    updateCountDisplay();
};

// Reset the count
const reset = ():void => {
    count = 0;
    updateCountDisplay();
};

// Attach event listeners to buttons
const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const resetButton = document.getElementById('reset-button');

if (incrementButton) {
    incrementButton.onclick = increment;
}

if (decrementButton) {
    decrementButton.onclick = decrement;
}

if (resetButton) {
    resetButton.onclick = reset;
}

