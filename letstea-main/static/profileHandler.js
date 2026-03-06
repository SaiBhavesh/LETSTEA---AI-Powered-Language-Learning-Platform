function checkProgress() {
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
    popupContainer.style.height = '250px'; // Increased height to accommodate the content
    popupContainer.id = 'popupContainer';

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = '#ffb0b0';
    closeButton.style.color = '#000';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '16px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';

    // Close button functionality
    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(popupContainer);
    });

    // Add the title container (flexbox container for button and title)
    const titleContainer = document.createElement('div');
    titleContainer.style.display = 'flex';
    titleContainer.style.flexDirection = 'column'; // Stack button and title vertically
    titleContainer.style.alignItems = 'center'; // Center the title
    titleContainer.style.justifyContent = 'space-between'; // Space between elements
    titleContainer.style.marginBottom = '10px';

    // Add title inside title container
    const title = document.createElement('h2');
    title.textContent = 'Progress';
    title.style.fontFamily = '"Courier New", monospace';
    title.style.fontSize = '24px';
    title.style.fontWeight = 'bold';
    title.style.color = '#333';
    titleContainer.appendChild(title);

    // Append close button to title container
    titleContainer.appendChild(closeButton);

    // Append the title container to the popup
    popupContainer.appendChild(titleContainer);

    // Retrieve data from localStorage
    const domain = localStorage.getItem('currentDomain');
    const cefr = localStorage.getItem('currentCefr');
    const index = localStorage.getItem('currentIndex');

    // Create a container for the progress details
    const progressContainer = document.createElement('div');
    progressContainer.style.textAlign = 'left';
    progressContainer.style.width = '100%';

    // Display the values from localStorage
    if (domain) {
        const domainElement = document.createElement('p');
        domainElement.textContent = `Domain: ${domain}`;
        domainElement.style.fontFamily = '"Courier New", monospace';
        domainElement.style.fontSize = '18px';
        domainElement.style.fontWeight = 'bold';
        domainElement.style.color = '#333';
        progressContainer.appendChild(domainElement);
    }

    if (cefr) {
        const cefrElement = document.createElement('p');
        cefrElement.textContent = `CEFR Level: ${cefr}`;
        cefrElement.style.fontFamily = '"Courier New", monospace';
        cefrElement.style.fontSize = '18px';
        cefrElement.style.fontWeight = 'bold';
        cefrElement.style.color = '#333';
        progressContainer.appendChild(cefrElement);
    }

    if (index) {
        const indexElement = document.createElement('p');
        indexElement.textContent = `Topic: ${index}/100`;
        indexElement.style.fontFamily = '"Courier New", monospace';
        indexElement.style.fontSize = '18px';
        indexElement.style.fontWeight = 'bold';
        indexElement.style.color = '#333';
        progressContainer.appendChild(indexElement);
    }

    // Add progress details to the popup
    popupContainer.appendChild(progressContainer);

    // Append the popup to the body
    document.body.appendChild(popupContainer);
}


function checkProfile() {
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
    popupContainer.style.height = '350px'; // Increased height to accommodate the content
    popupContainer.id = 'popupContainer';

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = '#ffb0b0';
    closeButton.style.color = '#000';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '16px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';

    // Close button functionality
    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(popupContainer);
    });

    // Add the title container (flexbox container for button and title)
    const titleContainer = document.createElement('div');
    titleContainer.style.display = 'flex';
    titleContainer.style.flexDirection = 'column'; // Stack button and title vertically
    titleContainer.style.alignItems = 'center'; // Center the title
    titleContainer.style.justifyContent = 'space-between'; // Space between elements
    titleContainer.style.marginBottom = '10px';

    // Add title inside title container
    const title = document.createElement('h2');
    title.textContent = 'User Profile';
    title.style.fontFamily = '"Courier New", monospace';
    title.style.fontSize = '24px';
    title.style.fontWeight = 'bold';
    title.style.color = '#333';
    titleContainer.appendChild(title);

    // Append close button to title container
    titleContainer.appendChild(closeButton);

    // Append the title container to the popup
    popupContainer.appendChild(titleContainer);

    // Retrieve data from sessionStorage
    const userProfile = JSON.parse(sessionStorage.getItem('userprofilecurrent'));
    console.log("userprofile:")
    console.log(userProfile)

    // Create a container for the user profile details
    const profileContainer = document.createElement('div');
    profileContainer.style.textAlign = 'left';
    profileContainer.style.width = '100%';

    // Display the values from sessionStorage
    if (userProfile) {

            if (userProfile.Name) {
            const nameElement = document.createElement('p');
            nameElement.textContent = `Name: ${userProfile.Name}`;
            nameElement.style.fontFamily = '"Courier New", monospace';
            nameElement.style.fontSize = '18px';
            nameElement.style.fontWeight = 'bold';
            nameElement.style.color = '#333';
            profileContainer.appendChild(nameElement);
        }

        // Age
        if (userProfile.Age) {
            const ageElement = document.createElement('p');
            ageElement.textContent = `Age: ${userProfile.Age}`;
            ageElement.style.fontFamily = '"Courier New", monospace';
            ageElement.style.fontSize = '18px';
            ageElement.style.fontWeight = 'bold';
            ageElement.style.color = '#333';
            profileContainer.appendChild(ageElement);
        }

        // Gender
        if (userProfile.Gender) {
            const genderElement = document.createElement('p');
            genderElement.textContent = `Gender: ${userProfile.Gender}`;
            genderElement.style.fontFamily = '"Courier New", monospace';
            genderElement.style.fontSize = '18px';
            genderElement.style.fontWeight = 'bold';
            genderElement.style.color = '#333';
            profileContainer.appendChild(genderElement);
        }

        // Location
        if (userProfile.Location) {
            const locationElement = document.createElement('p');
            locationElement.textContent = `Location: ${userProfile.Location}`;
            locationElement.style.fontFamily = '"Courier New", monospace';
            locationElement.style.fontSize = '18px';
            locationElement.style.fontWeight = 'bold';
            locationElement.style.color = '#333';
            profileContainer.appendChild(locationElement);
        }

        // Mother Tongue
        if (userProfile.motherTongue) {
            const motherTongueElement = document.createElement('p');
            motherTongueElement.textContent = `Mother Tongue: ${userProfile.motherTongue}`;
            motherTongueElement.style.fontFamily = '"Courier New", monospace';
            motherTongueElement.style.fontSize = '18px';
            motherTongueElement.style.fontWeight = 'bold';
            motherTongueElement.style.color = '#333';
            profileContainer.appendChild(motherTongueElement);
        }
    }

    // Add profile details to the popup
    popupContainer.appendChild(profileContainer);

    // Append the popup to the body
    document.body.appendChild(popupContainer);
}

function logout() {
    // Create the blur effect for the background
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent dark background
    overlay.style.zIndex = '999999'; // Overlay layer
    overlay.style.backdropFilter = 'blur(5px)'; // Apply the blur effect
    document.body.appendChild(overlay);

    // Create the popup container
    const popupContainer = document.createElement('div');
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '50%';
    popupContainer.style.left = '50%';
    popupContainer.style.transform = 'translate(-50%, -50%)';
    popupContainer.style.backgroundColor = '#fff';
    popupContainer.style.padding = '40px';
    popupContainer.style.borderRadius = '8px';
    popupContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    popupContainer.style.zIndex = '1000000'; // Popup layer
    popupContainer.style.textAlign = 'center';
    popupContainer.style.width = '400px'; // Adjusted width for a clean layout

    // Create the close button ("X")
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = '#ffb0b0';
    closeButton.style.color = '#000';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '16px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';

    // Close popup when X button is clicked
    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(popupContainer);
    });

    // Create the title for the popup
    const title = document.createElement('h3');
    title.innerHTML = 'Are you Tired of the tea &#128577;?';
    title.style.marginBottom = "10px";
    title.style.fontFamily = '"Courier New", monospace';
    popupContainer.appendChild(title);

    // Create the button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.marginTop = '40px';
    buttonContainer.style.minWidth = '350px';

    // Create the Logout button (on the left)
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.style.minWidth = '150px'; // Minimum width for both buttons
    logoutButton.style.padding = '12px 25px';
    logoutButton.style.backgroundColor = '#ffb0b0'; // Red color as per previous design
    logoutButton.style.color = '#000';
    logoutButton.style.border = 'none';
    logoutButton.style.margin = "auto";
    logoutButton.style.borderRadius = '8px'; // Rounded button
    logoutButton.style.cursor = 'pointer';
    logoutButton.style.fontFamily = '"Courier New", monospace';
    logoutButton.style.fontSize = '16px'; // Font size for the button
    logoutButton.style.transition = 'background-color 0.3s ease'; // Smooth transition for hover

    // Button hover effect for Logout
    logoutButton.addEventListener('mouseover', () => {
           logoutButton.style.border = '1px solid black'; // Red border for outlined effect
        logoutButton.style.backgroundColor = '#fff'; // Lighter red on hover
    });

    logoutButton.addEventListener('mouseout', () => {
               logoutButton.style.border = 'none';

        logoutButton.style.backgroundColor = '#ffb0b0'; // Original red when not hovered
    });

    // Perform logout when Logout button is clicked
    logoutButton.addEventListener('click', () => {
        // Clear sessionStorage
        sessionStorage.clear();

        // Clear localStorage
        localStorage.clear();

        // Clear cookies
        const cookies = document.cookie.split(";");
        cookies.forEach(function(cookie) {
            const cookieName = cookie.split("=")[0].trim();
            document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
        });

        // Redirect to the login page
        window.location.href = '/login';
    });

    // Create the Cancel button (on the right, outlined in red)
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Resume';
    cancelButton.style.minWidth = '150px'; // Minimum width for both buttons
    cancelButton.style.padding = '12px 25px';
    cancelButton.style.backgroundColor = '#ffb0b0'; // White background
    cancelButton.style.color = '#000'; // Red text color
    cancelButton.style.margin = "auto";
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '8px'; // Rounded button
    cancelButton.style.cursor = 'pointer';
    cancelButton.style.fontFamily = '"Courier New", monospace';
    cancelButton.style.fontSize = '16px'; // Font size for the button
    cancelButton.style.transition = 'background-color 0.3s ease'; // Smooth transition for hover

    // Button hover effect for Cancel
    cancelButton.addEventListener('mouseover', () => {
        cancelButton.style.border = '1px solid red'; // Red border for outlined effect
        cancelButton.style.backgroundColor = '#fff'; // Light red on hover
    });

    cancelButton.addEventListener('mouseout', () => {
        cancelButton.style.border = 'none'; // Red border for outlined effect

        cancelButton.style.backgroundColor = '#ffb0b0'; // Original white background when not hovered
    });

    // Close popup when Cancel is clicked
    cancelButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(popupContainer);
    });

    // Add buttons to the button container
    buttonContainer.appendChild(logoutButton);
    buttonContainer.appendChild(cancelButton);

    // Add the button container to the popup
    popupContainer.appendChild(buttonContainer);

    // Append the close button and the popup to the body
    popupContainer.appendChild(closeButton);
    document.body.appendChild(popupContainer);
}
