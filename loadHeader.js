// loadHeader.js

// Function to load the header dynamically
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Call the function when the page loads
window.onload = loadHeader;
