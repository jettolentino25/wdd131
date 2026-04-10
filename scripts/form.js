// Provided Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    // DYNAMIC POPULATION
    products.forEach(product => {
        const option = document.createElement("option");

        // Audit requires ID for value and Name for text
        option.value = product.id;

        // Clean up the name for display (Capitalize)
        const displayName = product.name.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        option.textContent = displayName;
        productSelect.appendChild(option);
    });

    // FOOTER LOGIC
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModifiedDisplay").textContent = `Last Modified: ${document.lastModified}`;
});