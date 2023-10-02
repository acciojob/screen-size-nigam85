//your JS code here. If required.
  const widthElement = document.getElementById('width');
        const heightElement = document.getElementById('height');

        // Function to update the width and height elements
        function updateSize() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            widthElement.textContent = width;
            heightElement.textContent = height;
        }

        // Initial call to set the initial size
        updateSize();

        // Add an event listener to the window's resize event
        window.addEventListener('resize', updateSize);
