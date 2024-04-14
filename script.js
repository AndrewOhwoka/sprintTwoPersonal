      // Select the h1 element by ID
      const header = document.getElementById('header');

      // Function to update the text content of the h1 element
      function updateHeaderText() {
          // Check current text and change it accordingly
          if (header.textContent === 'Andrew Ohwoka') {
              header.textContent = 'Welcome to Andrew Ohwoka\'s resume.';
          } else {
              header.textContent = 'Andrew Ohwoka';  // Change it back
          }
      }

      // Set an interval to update the header text every 2 seconds (2000 milliseconds)
      setInterval(updateHeaderText, 2000);