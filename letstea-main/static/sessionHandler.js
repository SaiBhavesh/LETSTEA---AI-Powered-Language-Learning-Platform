
// Function to check for the presence of the username cookie
function checkCookieExpiration() {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        if (key) acc[key] = value;
        return acc;
    }, {});
    console.log('Cookies:', document.cookie);

    // Check if the username cookie exists, if not, handle session expiration
    if (!cookies.username) {
        // If the username cookie is not found, call handleSessionExpiration
        handleSessionExpiration();
    }
}

// Function to handle session expiration
function handleSessionExpiration() {
 if (document.getElementById('overlay')) {
        return; // If the overlay exists, do nothing
    }
    // Create the blur effect for the background
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // Semi-transparent background
    overlay.style.zIndex = '999999'; // Place it below the popup
    overlay.style.backdropFilter = 'blur(5px)'; // Apply the blur effect
    document.body.appendChild(overlay);

    // Create the popup container
    const popupContainer = document.createElement('div');
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '50%';
    popupContainer.style.left = '50%';
    popupContainer.style.transform = 'translate(-50%, -50%)';
    popupContainer.style.display = 'flex';
    popupContainer.style.flexDirection = 'column';
    popupContainer.style.alignItems = 'center';
    popupContainer.style.justifyContent = 'center';
    popupContainer.style.backgroundColor = '#fff';
    popupContainer.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.8)'; // More noticeable shadow
    popupContainer.style.padding = '40px';
    popupContainer.style.borderRadius = '12px';
    popupContainer.style.zIndex = '1000000';
    popupContainer.style.width = '450px'; // Slightly wider for readability
    popupContainer.style.height = '250px'; // Increased height to accommodate the message

    // Add a message container
    const messageContainer = document.createElement('div');
    messageContainer.style.marginBottom = '10px';
    messageContainer.style.textAlign = 'center'; // Center the text

    // Create the message text
    const message = document.createElement('p');
    message.style.fontFamily = '"Courier New", monospace';
    message.textContent = 'Your session has expired. Please log in again.';
    message.style.fontSize = '26px'; // Larger font size for better visibility
    message.style.fontWeight = 'bold'; // Bold text for emphasis
    message.style.color = '#000'; // Darker text color for readability
    message.style.lineHeight = '1.4'; // Improved line spacing
    message.style.margin = '0'; // Remove default margin for cleaner look
    message.style.padding = '0'; // Remove padding to avoid extra spacing

    // Apply additional styling to the message container
    messageContainer.style.padding = '10px'; // Add padding around the text
    messageContainer.style.borderRadius = '8px'; // Rounded corners for the container
    messageContainer.style.backgroundColor = '#f8d7da'; // Light red background to indicate the message is a warning
    messageContainer.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)'; // Subtle shadow for depth
    messageContainer.style.color = '#721c24'; // Dark red text color for contrast

    // Append the message to the container
    messageContainer.appendChild(message);

    // Add the message container to the popup
    popupContainer.appendChild(messageContainer);

    // Add a button container
    const buttonContainer = document.createElement('div');


    const loginButton = document.createElement('button');
    loginButton.textContent = 'Go to Login';
    loginButton.style.marginTop = '10px';
    loginButton.style.minWidth = '300px';
    loginButton.style.padding = '12px 25px';
    loginButton.style.backgroundColor = '#ffb0b0';
    loginButton.style.color = '#000';
    loginButton.style.border = 'none';
    loginButton.style.borderRadius = '8px'; // Rounded button
    loginButton.style.cursor = 'pointer';
    loginButton.style.fontFamily = '"Courier New", monospace';
    loginButton.style.fontSize = '16px'; // Font size for the button
    loginButton.style.transition = 'background-color 0.3s ease'; // Smooth transition for hover

    // Button hover effect
    loginButton.addEventListener('mouseover', () => {
        loginButton.style.backgroundColor = '#ff8f8f'; // Lighter red on hover
    });

    loginButton.addEventListener('mouseout', () => {
        loginButton.style.backgroundColor = '#ffb0b0'; // Original red when not hovered
    });

    loginButton.addEventListener('click', () => {
        window.location.href = '/login'; // Redirect to the login page
    });

    buttonContainer.appendChild(loginButton);
    popupContainer.appendChild(buttonContainer);

    // Append the popup to the body
    document.body.appendChild(popupContainer);
}


// Start the cookie expiration listener
function startExpirationListener() {
    // Check for cookie expiration every 30 seconds
    setInterval(checkCookieExpiration, 1000); // Check every 30 seconds
}

// Expose functions to be used in HTML files
window.startExpirationListener = startExpirationListener;

// You can now use these functions in your HTML files:
document.addEventListener('DOMContentLoaded', () => {
    // Optionally start listening for expiration as soon as the page loads
    startExpirationListener();
});
