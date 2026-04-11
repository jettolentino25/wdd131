document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector("#menu-toggle");
    const menuList = document.querySelector("#menu-list");
    const lessonsGrid = document.querySelector(".grid-container");
    const yearSpan = document.querySelector("#year");
    const modifiedSpan = document.querySelector("#lastModified");
    const visitDisplay = document.querySelector("#visitCount");

    const programs = [
        { id: "01", title: "Early Childhood", desc: "Designed for ages 5-8. We focus on rhythm and joy.", active: false },
        { id: "02", title: "Classical Mastery", desc: "Intermediate to advanced training.", active: true },
        { id: "03", title: "Adult & Leisure", desc: "Customized lessons for adults.", active: false }
    ];

    function displayLessons(data) {
        if (!lessonsGrid) return;
        lessonsGrid.innerHTML = ``; 
        data.forEach(item => {
            const cardClass = item.active ? `lesson-card active` : `lesson-card`;
            const cardHTML = `
                <div class="${cardClass}">
                    <div class="card-icon">${item.id}</div>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>`;
            lessonsGrid.insertAdjacentHTML("beforeend", cardHTML);
        });
    }

    function trackVisits() {
        let visits = Number(window.localStorage.getItem("studioVisits-ls")) || 0;
        visits++;
        window.localStorage.setItem("studioVisits-ls", visits);
        if (visitDisplay) {
            visitDisplay.textContent = `Studio Visits: ${visits}`;
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            menuList.classList.toggle("is-active");
            const expanded = menuBtn.getAttribute("aria-expanded") === "true";
            menuBtn.setAttribute("aria-expanded", `${!expanded}`);
        });
    }

    if (yearSpan) yearSpan.textContent = `${new Date().getFullYear()}`;
    if (modifiedSpan) modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    displayLessons(programs);
    trackVisits();
});