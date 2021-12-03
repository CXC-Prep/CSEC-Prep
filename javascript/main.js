let dark = true;
let root = document.querySelector(":root");
let shareButtons = null;
let email_getter, email_state;

document.onload = init();

function init() {
    theme = window.localStorage.getItem("theme");
    if(theme == "light") {
        change_theme();
    }
    setTimeout(record_new_user, 2000)
    setTimeout(email, 10000)
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

function email() {
    var email_state = window.localStorage.getItem("email-state");
    var email_getter = document.getElementById("email-holder");

    if(email_getter == null) {
        console.log("index page")
        return
    }
    
    if (email_state == "received") {
        console.log(email_state)
    }
    //checks if this is a new session
    else if(window.sessionStorage.getItem("session")) {
        console.log("ongoing")
        return
    }
    else if (email_state == "denied") {
        console.log(email_state)
        denied_counter = parseInt(window.localStorage.getItem("denied-counter"));
        console.log(denied_counter)

        if(denied_counter > 0) {
            window.localStorage.setItem("denied-counter", denied_counter - 1)
        }
        else {
            email_getter.style.setProperty("display", "block");
        
            window.addEventListener('click', 
                function(e){   
                    if (!document.getElementById('email-form').contains(e.target)){
                        email_getter.style.setProperty("display", "none");
                        window.localStorage.setItem("denied-counter", 2)
                    }
                }
            );
        }
    }
    else {
        console.log(email_state)
        email_getter.style.setProperty("display", "block");
        
        window.addEventListener('click', 
            function(e){   
                if (!document.getElementById('email-form').contains(e.target)){
                    email_getter.style.setProperty("display", "none");

                    window.localStorage.setItem("email-state", "denied")
                    window.localStorage.setItem("denied-counter", 2)
                }
            }
        );
    }

    window.sessionStorage.setItem("session", "ongoing")
}

function received_email_state() {
    panelbear("track", "Email")
    window.localStorage.setItem("email-state", "received")
}