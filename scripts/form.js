const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

function populateProductSelect() {
    const selectElement = document.getElementById('productName');
    if (!selectElement) return;

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Audit requires ID for value
        // Capitalize name
        const formattedName = product.name.toUpperCase();
        option.textContent = formattedName;
        selectElement.appendChild(option);
    });
}

function displayReviewCount() {
    const counterElement = document.getElementById('reviewCount');
    if (counterElement) {
        let count = Number(localStorage.getItem('productReviewCount')) || 0;
        // Increment only on review page load
        if (window.location.pathname.includes('review.html')) {
            count++;
            localStorage.setItem('productReviewCount', count);
        }
        counterElement.textContent = count;
    }
}

function updateFooter() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
}

document.addEventListener('DOMContentLoaded', () => {
    populateProductSelect();
    displayReviewCount();
    updateFooter();
});