const menuChecker = document.getElementById("menu-checker");
const menuItems = document.querySelector(".menu-items");
const main = document.querySelector("main");
const nav = document.querySelector("nav");

// MENU FUNCTION

menuChecker.addEventListener("click", (e) => {
    const menuBtnImg = e.currentTarget.nextElementSibling;
    if (menuChecker.checked) {
        // Change button image on toggle
        menuBtnImg.src = "./assets/images/icon-menu-close.svg";
        // Add overlay to background
        menuItems.classList.add("isOpen");
        main.className = "overlay";
        nav.classList.add("overlay");
        // Stop page from scrolling when menu is open
        document.body.style.overflow = "hidden";
    }
    else {
        menuBtnImg.src = "./assets/images/icon-menu.svg";
        menuItems.classList.remove("isOpen");
        main.className = "";
        nav.classList.remove("overlay");
        document.body.style.overflow = "";
    }
})