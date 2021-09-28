let dark = true;
let root = document.querySelector(":root");
let shareButtons = null;

document.onload = init();

function init() {
    theme = window.localStorage.getItem("theme");
    if(theme == "light") {
        change_theme();
    }
    setTimeout(record_new_user, 2000)
}

function change_theme() {
    let style = getComputedStyle(root);

    if(!dark) { 
        root.style.setProperty("--primary", style.getPropertyValue("--accent-colour"));
        root.style.setProperty("--secondary", style.getPropertyValue("--light-colour"));
        root.style.setProperty("--tertiary", style.getPropertyValue("--dark-colour"));
        document.head.getElementsByClassName("logo")[0].href = "media/logo-dark.png";
        dark = true;
        window.localStorage.setItem("theme", "dark");
    }
    else {
        root.style.setProperty("--primary", style.getPropertyValue("--light-colour"));
        root.style.setProperty("--secondary", style.getPropertyValue("--dark-colour"));
        root.style.setProperty("--tertiary", style.getPropertyValue("--accent-colour"));
        document.head.getElementsByClassName("logo")[0].href = "media/logo-light.png";
        dark = false;
        window.localStorage.setItem("theme", "light");
    }
}

function record_new_user() {
    let returning = window.localStorage.getItem("returning")
    if (returning != "true") {
        panelbear("track", "New-User")
        console.log("New User Recorded")
        window.localStorage.setItem("returning", "true")
    }
    else {
        console.log("Returning user")
    }
}

function record_share() {
    panelbear("track", "Shared")
    console.log("Share tracked")
}