

function selector(element) {
    return document.querySelector(element);
}

function render(htmlMarkup) {
    let appFrame = selector("#appFrame").innerHTML = htmlMarkup;
}

function tableCounter(count) {
    userSetting["tableCount"] = count;
    selector('input').style.backgroundColor = "#d86337";
}

function tableCounterCustom() {
    let custom = selector("#customTable");
    custom.setAttribute("value", "");
    custom.setAttribute("placeholder", "Please enter a number");
    custom.setAttribute("type", "text");
    

    custom.addEventListener('mouseout', function() { 
        if (custom.value !== "") {
            let customNumber = parseInt(custom.value);
            if (!isNaN(customNumber)) {
                selector("#errorDiv").style.display = "none";
                userSetting["tableCount"] = custom.value;
                custom.style.backgroundColor = "#d86337";
            } else {
                selector("#errorDiv").style.display = "block";
                selector("#errorDiv").innerHTML = "<p class=\"errorMessage\"> " + custom.value + " is not a number!</p>"
            }
        }
     }, false);
}
