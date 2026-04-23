document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("site_menu_button");
    const menu = document.getElementById("dropdown-menu");
    const xSign = document.getElementById("xSign");
    const plusSign = document.getElementById("plusSign");

    const setMenuOpen = (isOpen) => {
        menu.hidden = !isOpen;
        plusSign.hidden = isOpen;
        xSign.hidden = !isOpen;
        button.setAttribute("aria-expanded", String(isOpen));
        button.setAttribute("aria-label", isOpen ? "Close site menu" : "Open site menu");
    };

    button.addEventListener("click", () => {
        setMenuOpen(menu.hidden);
    });

    menu.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !menu.hidden) {
            setMenuOpen(false);
            button.focus();
        }
    });
});
