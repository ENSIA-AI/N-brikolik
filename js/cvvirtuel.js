document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contentArea = document.getElementById('content-area');

    // Example content for each category as template literals
    const content = {
        photography:`
            <div class="image">Photo 1</div>
            <div class="image">Photo 2</div>
            <div class="image">Photo 3</div>`,
        design: `
            <div class="image">Design 1</div>
            <div class="image">Design 2</div>
            <div class="image">Design 3</div>`,
        redaction: `
            <div class="image">Redaction 1</div>
            <div class="image">Redaction 2</div>
            <div class="image">Redaction 3</div>`,
        development: `
            <div class="image">Dev 1</div>
            <div class="image">Dev 2</div>
            <div class="image">Dev 3</div>`
    };

    function updateContent(category) {
        contentArea.innerHTML = content[category];
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));

            tab.classList.add('active');
            updateContent(tab.getAttribute('data-category'));
        });
    });

    // Set initial content
    updateContent('photography');
});
