document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector("#menu-toggle");
    const menuList = document.querySelector("#menu-list");
    const headerNav = document.querySelector("header nav");

    // 1. Mobile Menu Toggle
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            menuList.classList.toggle("is-active");
            const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
            menuBtn.setAttribute("aria-expanded", !expanded);
        });
    }

    // 2. Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu on link click
            menuList.classList.remove("is-active");

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Header Scroll Effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            headerNav.style.paddingBlock = "0.5rem";
            headerNav.style.borderBottomColor = "var(--accent)";
        } else {
            headerNav.style.paddingBlock = "1rem";
            headerNav.style.borderBottomColor = "var(--grey-light)";
        }
    });
});