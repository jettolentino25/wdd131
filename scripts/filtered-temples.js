


// Temple array 
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // added temples
    {
        templeName: "Nairobi Kenya Temple",
        location: "Nairobi, Kenya",
        dedicated: "2025, May, 18",
        area: 19870,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-56575-thumb.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Johannesburg South Africa Temple",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 25",
        area: 19184,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"

    }
];

// Select the container
const templeContainer = document.querySelector("#temple-cards");

// 3️⃣ Display function
function displayTemples(templeList) {
    // Clear previous cards
    templeContainer.innerHTML = "";

    // Loop through temples
    for (let i = 0; i < templeList.length; i++) {
        const temple = templeList[i];

        // Create article
        const card = document.createElement("article");

        // Name
        const name = document.createElement("h3");
        name.textContent = temple.templeName;
        card.appendChild(name);

        // Location
        const location = document.createElement("p");
        location.textContent = temple.location;
        card.appendChild(location);

        // Dedicated
        const dedicated = document.createElement("p");
        dedicated.textContent = "Dedicated: " + temple.dedicated;
        card.appendChild(dedicated);

        // Area
        const area = document.createElement("p");
        area.textContent = "Area: " + temple.area + " sq ft";
        card.appendChild(area);

        // Image
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy"; // native lazy loading
        card.appendChild(img);

        // Add card to container
        templeContainer.appendChild(card);
    }
}

//  Simple filter function
function filterTemples(filter) {
    const filtered = [];

    for (let i = 0; i < temples.length; i++) {
        const temple = temples[i];
        const year = parseInt(temple.dedicated.split(",")[0]);

        if (filter === "Old" && year < 1900) {
            filtered.push(temple);
        } else if (filter === "New" && year > 2000) {
            filtered.push(temple);
        } else if (filter === "Large" && temple.area > 90000) {
            filtered.push(temple);
        } else if (filter === "Small" && temple.area < 10000) {
            filtered.push(temple);
        } else if (filter === "Home") {
            filtered.push(temple);
        }
    }

    displayTemples(filtered);
}

//  Simple nav setup
const navItems = document.querySelectorAll(".nav-item");
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {
        const filter = this.textContent;
        filterTemples(filter);
    });
}

// Footer year & last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

//Shows all temples on load
displayTemples(temples);