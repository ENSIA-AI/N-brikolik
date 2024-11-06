
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    // Check if the menu is currently visible
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none'; // Hide the menu
    } else {
        navMenu.style.display = 'block'; // Show the menu
    }
}

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cont');
    let cards = Array.from(document.querySelectorAll('.job-card'));

    // Function to rotate the cards
    function rotateCards() {
        const isSmallScreen = window.innerWidth <= 1200;

        // Add a transition effect to the container
        container.classList.add('rotate-transition');

        setTimeout(() => {
            // Move the first card to the end of the array to simulate a circular shift
            const firstCard = cards.shift();
            cards.push(firstCard);

            // Clear the container and re-append the cards in the new order
            container.innerHTML = '';
            cards.forEach(card => container.appendChild(card));

            // Remove the transition class after the rotation
            container.classList.remove('rotate-transition');

            // Update the appearance of the cards
            updateCards(isSmallScreen);
        }, 300); // Transition delay
    }

    // Function to update the appearance of the cards
    function updateCards(isSmallScreen) {
        cards.forEach((card, index) => {
            // Reset styles for all cards
            card.style.transform = 'scale(1)';
            card.style.zIndex = '0';

            if (isSmallScreen) {
                // For smaller screens, apply scaling to all cards equally
                card.style.transform = 'scale(1)';
                card.style.marginTop = '0';
            } else {
                // Highlight the middle card on larger screens
                if (index === 1) {
                    card.style.transform = 'scale(1.1)';
                    card.style.zIndex = '1';
                }
            }
        });
    }

    // Initial setup to highlight the middle card or reset for smaller screens
    updateCards(window.innerWidth <= 1200);

    // Add event listener to rotate the cards on click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (window.innerWidth <= 1200 || card === cards[1]) {
                rotateCards();
            }
        });
    });

    // Update card styles on window resize
    window.addEventListener('resize', () => {
        updateCards(window.innerWidth <= 1200);
    });
});
