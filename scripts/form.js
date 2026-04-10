/* ============================================================ */
/* SYSTEM CORE - Inventory Mapping and Storage Management       */
/* ============================================================ */

const ASSET_INVENTORY = [
    { id: "sys-001", name: "Flux Capacitor" },
    { id: "sys-002", name: "Power Laces" },
    { id: "sys-003", name: "Time Circuits" },
    { id: "sys-004", name: "Voltage Reactor" },
    { id: "sys-005", name: "Warp Equalizer" }
];

const launchSystem = () => {
    const assetSelect = document.querySelector('#productName');
    const counterDisplay = document.querySelector('#reviewCountDisplay');
    const footerYear = document.querySelector('#currentyear');
    const footerModified = document.querySelector('#lastModified');

    // Populate dynamic inventory menu
    if (assetSelect) {
        ASSET_INVENTORY.forEach(item => {
            const el = document.createElement('option');
            el.value = item.id;
            el.textContent = item.name.toUpperCase();
            assetSelect.appendChild(el);
        });
    }

    // Handle reporting counter persistence
    if (window.location.pathname.includes('review.html')) {
        const DATABASE_KEY = 'portal_submission_count';
        let submissionTotal = parseInt(localStorage.getItem(DATABASE_KEY)) || 0;

        submissionTotal++;
        localStorage.setItem(DATABASE_KEY, submissionTotal);

        if (counterDisplay) {
            counterDisplay.textContent = submissionTotal;
        }
    }

    // Metadata update
    if (footerYear) footerYear.textContent = new Date().getFullYear();
    if (footerModified) footerModified.textContent = `Rev. ID: ${document.lastModified}`;
};

document.addEventListener('DOMContentLoaded', launchSystem);