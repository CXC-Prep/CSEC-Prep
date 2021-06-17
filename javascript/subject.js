var li, input, all, none;

function sort() {
    var topics, input, filter ;
    if (input == undefined) {
        input = document.getElementsByClassName("topic");
        li = document.getElementById("questions").getElementsByTagName("li");
        all = document.getElementById("select-all");
        none = document.getElementById("select-none")
    }

    filter = [];

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (element.checked == true) {
            filter.push(element.value);
        } 
    }


    if (filter.len == 0) {
        for (let i = 0; i < li.length; i ++) {
            li[i].style.display = "";
        }
        return
    }

    if (none.checked == true && filter.length > 0) {
        none.checked = false;
    }

    for (let i = 0; i < li.length; i++) {
        const element = li[i];
    
        topics = element.getAttribute("data-topic").split(", ");
        if (topics.find(x => filter.includes(x)) != undefined) {
            element.style.display = "";
        }
        else {
            element.style.display = "none";
        }
    };
}

function select_all() {
    if (input == undefined) {
        input = document.getElementsByClassName("topic");
        li = document.getElementById("questions").getElementsByTagName("li");
        all = document.getElementById("select-all");
        none = document.getElementById("select-none")
    }
    
    if (all.checked) {
        for (let i = 0; i < input.length; i++) {
            input[i].checked = true;
        }
        none.checked = false;
        sort()
    }
}

function select_none() {
    if (input == undefined) {
        input = document.getElementsByClassName("topic");
        li = document.getElementById("questions").getElementsByTagName("li");
        all = document.getElementById("select-all");
        none = document.getElementById("select-none")
    }

    if (none.checked) {
        for (let i = 0; i < input.length; i++) {
            input[i].checked = false;
        }
        all.checked = false;
        sort()
    }
}