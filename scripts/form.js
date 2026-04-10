/* ============================================================ */
/* SYSTEM CORE - Inventory Mapping and Storage Management       */
/* ============================================================ */

// 1. Product Array - Criteria 5: Used to populate the Product Name select
const ASSET_INVENTORY = [
    { id: "sys-001", name: "Flux Capacitor" },
    { id: "sys-002", name: "Power Laces" },
    { id: "sys-003", name: "Time Circuits" },
    { id: "sys-004", name: "Voltage Reactor" },
    { id: "sys-005", name: "Warp Equalizer" }
];

/**
 * Main initialization function triggered on DOMContentLoaded
 */
const launchSystem = () => {
    // Select necessary DOM elements
    const assetSelect = document.querySelector('#productName');
    const counterDisplay = document.querySelector('#reviewCountDisplay');
    const footerYear = document.querySelector('#currentyear');
    const footerModified = document.querySelector('#lastModified');

    // --- POPULATE PRODUCT SELECT (Criteria 5) ---
    if (assetSelect) {
        // Clear any existing options except the first placeholder
        while (assetSelect.options.length > 1) {
            assetSelect.remove(1);
        }

        // Map through array and append options
        ASSET_INVENTORY.forEach(item => {
            const el = document.createElement('option');
            el.value = item.id; // Assign ID as the value
            el.textContent = item.name.toUpperCase(); // Display Name in uppercase
            assetSelect.appendChild(el);
        });
    }

    // --- LOCALSTORAGE COUNTER (Criteria 6) ---
    // Check if the current page is the confirmation page
    const isReviewPage = window.location.pathname.endsWith('review.html');

    if (isReviewPage) {
        const DATABASE_KEY = 'portal_submission_count';

        // Retrieve current count or default to 0
        let submissionTotal = parseInt(localStorage.getItem(DATABASE_KEY)) || 0;

        // Increment the count upon landing on review.html
        submissionTotal++;

        // Update localStorage with the new value
        localStorage.setItem(DATABASE_KEY, submissionTotal);

        // Update the UI display
        if (counterDisplay) {
            counterDisplay.textContent = submissionTotal;
        }
    }

    // --- FOOTER METADATA ---
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    if (footerModified) {
        // Display the last modification date of the document
        footerModified.textContent = `Revision ID: ${document.lastModified}`;
    }
};

// Event Listener to trigger logic once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', launchSystem);