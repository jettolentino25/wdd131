/* scripts/project.js */
document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Constants & Selectors (Criteria 10) ---
    const menuBtn = document.querySelector("#menu-toggle");
    const menuList = document.querySelector("#menu-list");
    const lessonsGrid = document.querySelector(".grid-container");
    const yearSpan = document.querySelector("#year");
    const modifiedSpan = document.querySelector("#lastModified");
    const visitDisplay = document.querySelector("#visitCount");
    const enrollForm = document.querySelector("#enroll-form");

    // --- 2. Data: Array of Objects (Criteria 12 & 13) ---
    // Updated to exactly 4 distinct programs/age groups
    const programs = [
        { 
            id: "01", 
            title: "Early Explorers", 
            ages: "Ages 5 - 6", 
            desc: "Focusing on rhythm games, finger numbers, and big-note reading to spark early interest.", 
            level: "Beginner" 
        },
        { 
            id: "02", 
            title: "Young Pianists", 
            ages: "Ages 7 - 11", 
            desc: "A comprehensive approach covering technique, theory, and performance pieces.", 
            level: "Intermediate" 
        },
        { 
            id: "03", 
            title: "Teen Intensive", 
            ages: "Ages 12 - 17", 
            desc: "Accelerated learning focusing on classical repertoire and intermediate theory.", 
            level: "Advanced" 
        },
        { 
            id: "04", 
            title: "Adult & Leisure", 
            ages: "Ages 18+", 
            desc: "Flexible curriculum for busy adults, emphasizing chord theory and favorite classics.", 
            level: "Leisure" 
        }
    ];

    // --- 3. Functions (Criteria 9) ---

    // Function 1: Display Lessons (Criteria 13, 14)
    const displayLessons = (data) => {
        if (!lessonsGrid) return; 
        
        lessonsGrid.innerHTML = ""; 
        
        // Array Method: .forEach (Criteria 13)
        data.forEach(item => {
            // Conditional Branching (Criteria 11)
            const statusClass = item.level === "Advanced" ? "lesson-card active" : "lesson-card";
            
            // Template Literals (Criteria 14)
            const cardHTML = `
                <div class="${statusClass}">
                    <div class="card-icon">${item.id}</div>
                    <h3>${item.title}</h3>
                    <p><strong>${item.ages}</strong></p>
                    <p><em>Level: ${item.level}</em></p>
                    <p>${item.desc}</p>
                </div>`;
            
            lessonsGrid.insertAdjacentHTML("beforeend", cardHTML);
        });
    };

    // Function 2: LocalStorage Tracker (Criteria 15)
    const trackVisits = () => {
        if (!visitDisplay) return;

        let visits = Number(window.localStorage.getItem("tk-studio-visits")) || 0;
        
        if (visits === 0) {
            visitDisplay.textContent = "Welcome! This is your first visit to Talented Keys. 🎵";
        } else {
            visitDisplay.textContent = `Studio Visits: ${visits}`;
        }
        
        visits++;
        window.localStorage.setItem("tk-studio-visits", visits);
    };

    // --- 4. Event Listeners (Criteria 10) ---

    // Mobile Menu Toggle
    if (menuBtn && menuList) {
        menuBtn.addEventListener("click", () => {
            menuList.classList.toggle("is-active");
            const isOpen = menuList.classList.contains("is-active");
            menuBtn.setAttribute("aria-expanded", isOpen);
            menuBtn.innerHTML = isOpen ? "✕" : `<img src="images/menu.svg" alt="Menu">`;
        });
    }

    // Form Submission (Criteria 8 & 10)
    if (enrollForm) {
        enrollForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(enrollForm);
            const studentName = formData.get("name");
            alert(`Thank you, ${studentName}! Your inquiry has been sent to Aaron at Talented Keys.`);
            enrollForm.reset();
        });
    }

    // --- 5. Initialization ---
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modifiedSpan) modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    displayLessons(programs);
    trackVisits();
});