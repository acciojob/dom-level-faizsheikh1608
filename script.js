//your JS code here. If required.
// Get the element with the id 'level'
const targetElement = document.getElementById('level');

// Initialize a counter for DOM level
let domLevel = 0;

// Start from the target element and move up through the parent elements
let currentElement = targetElement;

// Loop through the parents of the element until you reach the root (html)
while (currentElement) {
    domLevel++;
    currentElement = currentElement.parentElement;
}

// Show the result using alert()
alert(`The level of the element is: ${domLevel}`);
