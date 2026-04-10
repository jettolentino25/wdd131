// 1. Exact Product Array provided by BYU-I
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.querySelector('#productName');

    // 2. Populate Product Options (Criteria: name for display, id for value)
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // 3. LocalStorage Counter (Criteria: Only increment on review.html load)
    if (window.location.pathname.includes('review.html')) {
        let reviewCount = Number(localStorage.getItem('reviewSubmissionCount')) || 0;
        reviewCount++;
        localStorage.setItem('reviewSubmissionCount', reviewCount);

        const display = document.querySelector('#reviewCountDisplay');
        if (display) {
            display.textContent = reviewCount;
        }
    }

    // 4. Common Footer Content
    const yearSpan = document.querySelector('#currentyear');
    const modSpan = document.querySelector('#lastModified');

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modSpan) modSpan.textContent = `Last Modified: ${document.lastModified}`;
});