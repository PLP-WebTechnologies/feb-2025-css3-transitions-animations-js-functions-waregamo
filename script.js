const animateButton = document.getElementById('animateButton');
const saveButton = document.getElementById('savePreferenceButton');
const customMessageInput = document.getElementById('customMessageInput');
const message = document.getElementById('preferenceMessage');

// Function to trigger animation
function triggerAnimation() {
    animateButton.classList.add('animate');

    // Remove the animation class after the animation is complete to allow re-triggering
    animateButton.addEventListener('animationend', () => {
        animateButton.classList.remove('animate');
    }, { once: true });
}

// Function to save custom preference in localStorage
function savePreference() {
    const customMessage = customMessageInput.value.trim();
    if (customMessage) {
        localStorage.setItem('preferredMessage', customMessage);
        showPreferenceMessage();  // Display the saved message
    } else {
        alert("Please type a message first.");
    }
}

// Function to retrieve and show preference message
function showPreferenceMessage() {
    const savedMessage = localStorage.getItem('preferredMessage');
    if (savedMessage) {
        message.textContent = `Your saved message: "${savedMessage}"`;
    } else {
        message.textContent = "No saved message found.";
    }
}

// Event Listeners
animateButton.addEventListener('click', triggerAnimation);
saveButton.addEventListener('click', savePreference);

// Show preference when page loads
window.addEventListener('load', showPreferenceMessage);
