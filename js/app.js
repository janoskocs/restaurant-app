

function selector(element) {
    return document.querySelector(element);
}

function render(htmlMarkup) {
    let appFrame = selector("#appFrame").innerHTML = htmlMarkup;
}

function tableCounter(count) {
    userSetting["tableCount"] = count;
}

function tableCounterCustom() {
    let custom = selector("#customTable");
    custom.setAttribute("value", "");
    custom.setAttribute("placeholder", "Please enter a number");
    custom.setAttribute("type", "text");
    let customNumber = parseInt(custom.value);
    //MAKE THE INPUT INTO TEXT, GET VALUE, PARSE VALUE TO NUMBER
    //IF IT'S A STRING THEN THROW ERROR.

    if (custom.value !== "") {
        if (!isNaN(customNumber)) {
            userSetting["tableCount"] = custom.value;
        } else {
            selector("#errorDiv").innerHTML = "<p class=\"errorMessage\"> " + custom.value + " is not a number!</p>"
        }
    }
    
}

