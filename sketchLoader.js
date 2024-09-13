// List of p5.js sketch files
const sketches = ["P5.js/sketch1.js", "P5.js/sketch2.js" ,"P5.js/sketch3.js"];

// Variable to keep track of the current p5 instance
let currentP5Instance = null;

// Function to load a random sketch
function loadRandomSketch() {
    // Ensure any previously created p5 instance is removed
    if (currentP5Instance) {
     
        currentP5Instance.remove();  // Remove the old canvas and its instance
        currentP5Instance = null;    // Reset the instance to prevent further actions on it
    }

    // Remove the old script element if it exists
    const existingScript = document.getElementById("p5-sketch");
    if (existingScript) {
        existingScript.remove();
    }

    // Choose a random sketch from the list
    const randomSketch = sketches[Math.floor(Math.random() * sketches.length)];

    // Dynamically load the chosen sketch script
    const script = document.createElement("script");
    script.src = randomSketch;
    script.id = "p5-sketch";
    
    // Append the script to the body to load the new sketch
    document.body.appendChild(script);
}

// Function to switch the current sketch when button is clicked
function switchSketch() {
    loadRandomSketch();  // Load a new random sketch and remove the previous one
}

// Initial random sketch load on page load
window.onload = () => {
    loadRandomSketch();
};

// Change sketch when the button is clicked
document.getElementById("change-sketch").addEventListener("click", switchSketch);