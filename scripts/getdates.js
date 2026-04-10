document.addEventListener("DOMContentLoaded", function () {

    // YEAR + LAST MODIFIED
    const yearEl = document.getElementById("currentyear");
    const modEl = document.getElementById("lastModified");

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    if (modEl) {
        modEl.textContent = "Last Modified: " + document.lastModified;
    }

    // START BUTTON
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", function () {
            alert("Welcome! Start your piano journey today 🎹");
        });
    }

    // TOGGLE ABOUT INFO
    const toggleBtn = document.getElementById("toggleBtn");
    const moreInfo = document.getElementById("moreInfo");

    if (toggleBtn && moreInfo) {
        toggleBtn.addEventListener("click", function () {
            moreInfo.classList.toggle("hidden");
        });
    }

    // SCROLL TO TOP BUTTON
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});