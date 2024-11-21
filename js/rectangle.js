document.querySelectorAll('.rectangle').forEach((rectangle) => {
    rectangle.addEventListener('click', () => {
        // Toggle the 'expanded' class when clicked
        rectangle.classList.toggle('expanded');
        
        // Collapse all other rectangles
        document.querySelectorAll('.rectangle').forEach((otherRectangle) => {
            if (otherRectangle !== rectangle) {
                otherRectangle.classList.remove('expanded');
            }
        });
    });
});
