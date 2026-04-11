document.addEventListener("DOMContentLoaded", () => {

    const lessonsGrid = document.querySelector(".grid-container");
    const yearSpan = document.querySelector("#year");
    const modifiedSpan = document.querySelector("#lastModified");
    const visitDisplay = document.querySelector("#visitCount");

    const menuToggle = document.querySelector("#menu-toggle");
    const menuList = document.querySelector("#menu-list");

    const programs = [
        { id: "01", title: "Early Explorers", ages: "Ages 5 - 6", desc: "Focusing on rhythm games.", level: "Beginner" },
        { id: "02", title: "Young Pianists", ages: "Ages 7 - 11", desc: "Technique and theory.", level: "Intermediate" },
        { id: "03", title: "Teen Intensive", ages: "Ages 12 - 17", desc: "Accelerated learning.", level: "Advanced" },
        { id: "04", title: "Adult & Leisure", ages: "Ages 18+", desc: "Flexible curriculum.", level: "Leisure" }
    ];

    /* NAV TOGGLE */
    if (menuToggle && menuList) {
        menuToggle.addEventListener("click", () => {
            menuList.classList.toggle("show");
        });
    }

    /* PROGRAM CARDS */
    if (lessonsGrid) {
        programs.forEach(item => {
            const statusClass = item.level === "Advanced" ? "lesson-card active" : "lesson-card";

            lessonsGrid.insertAdjacentHTML("beforeend", `
                <div class="${statusClass}">
                    <h3>${item.title}</h3>
                    <p><strong>${item.ages}</strong></p>
                    <p><em>Level: ${item.level}</em></p>
                    <p>${item.desc}</p>
                </div>
            `);
        });
    }

    /* FOOTER INFO */
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modifiedSpan) modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    /* LOCAL STORAGE */
    if (visitDisplay) {
        let visits = Number(localStorage.getItem("tk-visits")) || 0;

        visitDisplay.textContent =
            visits === 0
                ? `Welcome! First visit 🎵`
                : `Visits: ${visits}`;

        localStorage.setItem("tk-visits", visits + 1);
    }

});
