// Criteria 5: Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Product Select (Criteria 5)
    const productSelect = document.getElementById('productName');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id; // Use ID for value
            option.textContent = product.name.toUpperCase(); // Display Name
            productSelect.appendChild(option);
        });
    }

    // 2. Handle localStorage Counter (Criteria 6)
    if (window.location.pathname.includes('review.html')) {
        let count = Number(localStorage.getItem('reviewCounter')) || 0;
        count++;
        localStorage.setItem('reviewCounter', count);

        const display = document.getElementById('reviewCountDisplay');
        if (display) display.textContent = count;
    }

    // 3. Update Footer Info
    const yearSpan = document.getElementById('currentyear');
    const modSpan = document.getElementById('lastModified');

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modSpan) modSpan.textContent = `Last Modified: ${document.lastModified}`;
});