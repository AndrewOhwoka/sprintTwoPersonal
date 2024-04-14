// Get the h1 element and the image element
const header = document.getElementById('header');
const profileImage = document.getElementById('profileImage');

// Function to update the text content of the h1 element and the image source
function updateContent() {
    // Check current text and change it accordingly
    if (header.textContent === 'Andrew Ohwoka') {
        header.textContent = ' Andrew\'s resume';
        profileImage.src = "./image/AndrewOhwoka1.jpg"; // Change image
        
    } else {
        header.textContent = 'Andrew Ohwoka'; // Change it back
        profileImage.src = "./image/AndrewOhwoka2.jpg"; // Revert image
        
    }
}

// Set an interval to update the content every 2 seconds (2000 milliseconds)
setInterval(updateContent, 2000);