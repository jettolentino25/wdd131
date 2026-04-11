document.addEventListener("DOMContentLoaded", () => {
    // 1. DOM Interaction (Selecting elements)
    const menuBtn = document.querySelector("#menu-toggle");
    const menuList = document.querySelector("#menu-list");
    const lessonsGrid = document.querySelector(".grid-container");
    const yearSpan = document.querySelector("#year");
    const modifiedSpan = document.querySelector("#lastModified");

    // 2. Objects and Arrays (Criteria 12 & 13)
    const programs = [
        {
            id: "01",
            title: "Early Childhood",
            desc: "Designed for ages 5-8. We focus on rhythm, ear training, and making the first steps into music joyful.",
            active: false
        },
        {
            id: "02",
            title: "Classical Mastery",
            desc: "Intermediate to advanced training focusing on the works of Bach, Chopin, and the masters.",
            active: true
        },
        {
            id: "03",
            title: "Adult & Leisure",
            desc: "Customized lessons for adults looking to learn their favorite pieces or return to the piano.",
            active: false
        }
    ];

    // 3. Functions (Criteria 9: More than one function)

    // Function to render content using Template Literals (Criteria 14)
    function displayLessons(data) {
        lessonsGrid.innerHTML = ""; // Clear existing content

        data.forEach(item => {
            // Criteria 11: Conditional Branching
            const cardClass = item.active ? "lesson-card active" : "lesson-card";

            // Build the string using Template Literals
            const cardHTML = `
                <div class="${cardClass}">
                    <div class="card-icon">${item.id}</div>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
            lessonsGrid.insertAdjacentHTML("beforeend", cardHTML);
        });
    }

    // Function for LocalStorage (Criteria 15)
    function trackVisits() {
        let visits = localStorage.getItem("studioVisits") || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem("studioVisits", visits);
        console.log(`Visits: ${visits}`);
    }

    // 4. Event Listeners (Criteria 10)
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            menuList.classList.toggle("is-active");
            const expanded = menuBtn.getAttribute("aria-expanded") === "true";
            menuBtn.setAttribute("aria-expanded", !expanded);
        });
    }

    // Initialize Page
    yearSpan.textContent = new Date().getFullYear();
    modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    displayLessons(programs);
    trackVisits();
});