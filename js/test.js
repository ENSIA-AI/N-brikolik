function toggleChapter(chapterId) {
    const chapter = document.getElementById(chapterId);
    const chapterHeader = chapter.previousElementSibling;
    
    chapter.classList.toggle("active");
    chapterHeader.classList.toggle("active");
    
    const icon = chapterHeader.querySelector(".toggle-icon");
    icon.innerHTML = chapter.classList.contains("active") ? "&#9650;" : "&#9660;";
}

function toggleQMC(event, qmcId) {
    event.preventDefault();  // Prevent link from navigating
    const qmcSection = document.getElementById(qmcId);
    
    // Toggle visibility of the QMC section
    qmcSection.style.display = qmcSection.style.display === "block" ? "none" : "block";
}
