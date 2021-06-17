let dark = false;
let root = document.querySelector(":root");

document.onload = init();

function init() {
    theme = window.localStorage.getItem("theme");
    if(theme == "dark") {
        change_theme();
    }
}

function change_theme() {
    let style = getComputedStyle(root);

    let colour1 = style.getPropertyValue("--colour1");
    let colour2 = style.getPropertyValue("--colour2");
    let colour3 = style.getPropertyValue("--colour3");

    if(!dark) { 
        root.style.setProperty("--colour1", colour2);
        root.style.setProperty("--colour2", colour3);
        root.style.setProperty("--colour3", colour1);
        dark = true;
        window.localStorage.setItem("theme", "dark");
    }
    else {
        root.style.setProperty("--colour1", colour3);
        root.style.setProperty("--colour2", colour1);
        root.style.setProperty("--colour3", colour2);
        dark = false;
        window.localStorage.setItem("theme", "light");
    }
}