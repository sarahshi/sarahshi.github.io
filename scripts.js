window.addEventListener("load", () => {
    // Get elements from page
    const button = document.getElementById("site_menu_button");
    const menu = document.getElementById("dropdown-menu");
    const xSign = document.getElementById("xSign");
    const plusSign = document.getElementById("plusSign");

    // Use plus sign button to toggle menu
    button.addEventListener("click", () => {
        if (menu.style.display == "none"){
            menu.style.display = "inline";
            button.style.color = "white";
            // Switch button style when menu open
            plusSign.style.display = "none";
            xSign.style.display = "inline";
        }
        else{
            plusSign.style.display = "inline";
            xSign.style.display = "none";
            menu.style.display = "none";
        }
    });
    // Close menu when you click on it
    menu.addEventListener("click", () => {
        menu.style.display = "none";
        button.style.display = "inline";
        // If x sign is showing, switch back to plus sign
        if (xSign.style.display == "inline"){
            plusSign.style.display = "inline";
            xSign.style.display = "none";
        }
    });
});