document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contentArea = document.getElementById('content-area');

    // Content for each category
    const content = {
        photography: `
            <div class="work-item">Photo 1</div>
            <div class="work-item">Photo 2</div>
            <div class="work-item">Photo 3</div>
        `,
        design: `
            <div class="work-item">Design 1</div>
            <div class="work-item">Design 2</div>
            <div class="work-item">Design 3</div>
        `,
        redaction: `
            <div class="work-item">Redaction 1</div>
            <div class="work-item">Redaction 2</div>
            <div class="work-item">Redaction 3</div>
        `,
        development: `
            <div class="work-item">Dev 1</div>
            <div class="work-item">Dev 2</div>
            <div class="work-item">Dev 3</div>
        `
    };

    function updateContent(category) {
        contentArea.innerHTML = content[category];
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');
            updateContent(tab.getAttribute('data-category'));
        });
    });

    // Set initial content
    updateContent('photography');
});

document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = 'your-link-here.html'; // Redirect to a new page or use another action
    });
});

document.querySelectorAll('.certification').forEach(cert => {
    cert.addEventListener('click', function() {
        window.location.href = 'your-certification-link-here.html'; // Redirect to certification details
    });
});
