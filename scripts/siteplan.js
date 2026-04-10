// Set the current year in the footer
const yearElement = document.getElementById("currentyear");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Set the last modified date in the footer
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}