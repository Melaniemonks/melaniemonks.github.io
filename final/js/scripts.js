function toggleMenu() {

    document.getElementById("navo").classList.toggle("navigation");
}


document.querySelector('#lastmod').textContent = document.lastModified;

let currentYear = "2021";
let yearElement = document.querySelector('#year')
yearElement.textContent = currentYear;