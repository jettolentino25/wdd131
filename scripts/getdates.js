document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;

    // START BUTTON
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            alert("Welcome! Start your piano journey 🎹");
        });
    }

    // TOGGLE INFO
    const toggleBtn = document.getElementById("toggleBtn");
    const moreInfo = document.getElementById("moreInfo");

    if (toggleBtn && moreInfo) {
        toggleBtn.addEventListener("click", () => {
            moreInfo.classList.toggle("hidden");
        });
    }

    // SCROLL TOP
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});