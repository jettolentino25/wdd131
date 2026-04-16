document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        lessonsGrid: document.querySelector(".grid-container"),
        yearSpan: document.querySelector("#year"),
        modifiedSpan: document.querySelector("#lastModified"),
        visitDisplay: document.querySelector("#visitCount"),
        menuToggle: document.querySelector("#menu-toggle"),
        menuList: document.querySelector("#menu-list")
    };

    const programs = [
        { id: "01", title: "Early Explorers", ages: "Ages 5 - 6", desc: "Focusing on rhythm games.", level: "Beginner" },
        { id: "02", title: "Young Pianists", ages: "Ages 7 - 11", desc: "Technique and theory.", level: "Intermediate" },
        { id: "03", title: "Teen Intensive", ages: "Ages 12 - 17", desc: "Accelerated learning.", level: "Advanced" },
        { id: "04", title: "Adult & Leisure", ages: "Ages 18+", desc: "Flexible curriculum.", level: "Leisure" }
    ];

    /* NAV TOGGLE */
    if (elements.menuToggle && elements.menuList) {
        elements.menuToggle.addEventListener("click", () => {
            elements.menuList.classList.toggle("open");
        });
    }

    /* PROGRAM CARDS */
    if (elements.lessonsGrid) {
        elements.lessonsGrid.innerHTML = programs.map(item => {
            const statusClass = item.level === "Advanced" ? "lesson-card" : "lesson-card";
            return `
                <div class="${statusClass}">
                    <h3>${item.title}</h3>
                    <p><strong>${item.ages}</strong></p>
                    <p><em>Level: ${item.level}</em></p>
                    <p>${item.desc}</p>
                </div>`;
        }).join('');
    }

    /* FOOTER INFO */
    if (elements.yearSpan) elements.yearSpan.textContent = new Date().getFullYear();
    if (elements.modifiedSpan) elements.modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    /* LOCAL STORAGE */
    if (elements.visitDisplay) {
        const visits = Number(localStorage.getItem("tk-visits")) || 0;
        elements.visitDisplay.textContent = visits === 0 ? "Welcome! First visit 🎵" : `Visits: ${visits}`;
        localStorage.setItem("tk-visits", visits + 1);
    }
});