/* scripts/project.js */
document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Constants & Data ---
    const menuBtn = document.querySelector("#menu-toggle");
    const menuList = document.querySelector("#menu-list");
    const lessonsGrid = document.querySelector(".grid-container");
    const yearSpan = document.querySelector("#year");
    const modifiedSpan = document.querySelector("#lastModified");
    const visitDisplay = document.querySelector("#visitCount");
    const enrollForm = document.querySelector("#enroll-form");

    // Array of Objects (Requirement: Use objects, arrays)
    const programs = [
        { id: "01", title: "Early Childhood", desc: "Designed for ages 5-8. We focus on rhythm and joy.", level: "Beginner" },
        { id: "02", title: "Classical Mastery", desc: "Intermediate to advanced training for serious students.", level: "Advanced" },
        { id: "03", title: "Adult & Leisure", desc: "Customized lessons for adults focusing on favorite classics.", level: "Leisure" }
    ];

    // --- 2. Functions ---

    // Function 1: Display Lessons (Requirement: Array methods, Template Literals)
    const displayLessons = (data) => {
        if (!lessonsGrid) return;
        lessonsGrid.innerHTML = "";

        data.forEach(item => {
            // Requirement: Conditional Branching
            const statusClass = item.level === "Advanced" ? "lesson-card active" : "lesson-card";

            // Requirement: Template Literals
            const cardHTML = `
                <div class="${statusClass}">
                    <div class="card-icon">${item.id}</div>
                    <h3>${item.title}</h3>
                    <p><em>Level: ${item.level}</em></p>
                    <p>${item.desc}</p>
                </div>`;
            lessonsGrid.insertAdjacentHTML("beforeend", cardHTML);
        });
    };

    // Function 2: LocalStorage Tracker (Requirement: localStorage)
    const trackVisits = () => {
        let visits = Number(window.localStorage.getItem("tk-studio-visits")) || 0;
        if (visits === 0) {
            if (visitDisplay) visitDisplay.textContent = "Welcome! This is your first visit. 🎵";
        } else {
            if (visitDisplay) visitDisplay.textContent = `Studio Visits: ${visits}`;
        }
        visits++;
        window.localStorage.setItem("tk-studio-visits", visits);
    };

    // --- 3. Event Listeners ---

    // Mobile Menu Toggle (Requirement: Event listening & DOM modification)
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            menuList.classList.toggle("is-active");
            const isOpen = menuList.classList.contains("is-active");
            menuBtn.setAttribute("aria-expanded", isOpen);
            menuBtn.innerHTML = isOpen ? "✕" : `<img src="images/menu.svg" alt="Menu">`;
        });
    }

    // Form Submission (Requirement: DOM interaction)
    if (enrollForm) {
        enrollForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(enrollForm);
            const studentName = formData.get("name");
            alert(`Thank you, ${studentName}! Your inquiry has been sent to Aaron at Talented Keys.`);
            enrollForm.reset();
        });
    }

    // Initialize Page
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modifiedSpan) modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    displayLessons(programs);
    trackVisits();
});