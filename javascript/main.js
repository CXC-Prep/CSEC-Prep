let dark = true;
let root = document.querySelector(":root");
let shareButtons = null;

document.onload = init();

function init() {
    theme = window.localStorage.getItem("theme");
    if(theme == "light") {
        change_theme();
    }
}

function change_theme() {
    let style = getComputedStyle(root);

    if(!dark) { 
        root.style.setProperty("--primary", style.getPropertyValue("--accent-colour"));
        root.style.setProperty("--secondary", style.getPropertyValue("--light-colour"));
        root.style.setProperty("--tertiary", style.getPropertyValue("--dark-colour"));
        dark = true;
        window.localStorage.setItem("theme", "dark");
    }
    else {
        root.style.setProperty("--primary", style.getPropertyValue("--light-colour"));
        root.style.setProperty("--secondary", style.getPropertyValue("--dark-colour"));
        root.style.setProperty("--tertiary", style.getPropertyValue("--accent-colour"));
        dark = false;
        window.localStorage.setItem("theme", "light");
    }
}

function track_share(variant) {
    panelbear("track", "Shared")
    console.log("Share tracked")
}