document.getElementById("currentyear").textContent = new Date().getFullYear();
const now = new Date();
document.getElementById("lastModified").textContent =
    "Last Modified: " + now.toLocaleString();