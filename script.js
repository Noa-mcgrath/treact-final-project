function openMenu() {
    document.body.classList.add("menu--open");
    document.querySelector(".btn__menu[aria-controls='mobile-menu']")?.setAttribute("aria-expanded", "true");
    document.querySelector("#mobile-menu")?.setAttribute("aria-hidden", "false");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
    document.querySelector(".btn__menu[aria-controls='mobile-menu']")?.setAttribute("aria-expanded", "false");
    document.querySelector("#mobile-menu")?.setAttribute("aria-hidden", "true");
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});