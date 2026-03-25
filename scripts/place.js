const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last modification: " + document.lastModified;

const temperature = 22;
const windSpeed = 8;

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp)
        - (11.37 * Math.pow(speed, 0.16))
        + (0.3965 * temp * Math.pow(speed, 0.16));
}

let windChillValue;

if (temperature <= 10 && windSpeed > 4.8) {
    windChillValue = calculateWindChill(temperature, windSpeed);
    windChillValue = Math.round(windChillValue * 10) / 10 + " °C";
} else {
    windChillValue = "N/A";
}

document.getElementById("windChill").textContent = windChillValue;