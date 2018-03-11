let userSetting = {
    name: "",
    tableCount: null,
    orders: ""
};

function selector(element) {
    return document.querySelector(element);
}

function nameInput() {
    userSetting["name"] = selector("#userNameInput").value.toLowerCase();

    if (userSetting["name"] === "") {
        let errorDiv = selector("#errorDiv");
        errorDiv.innerHTML = "<p class=\"errorMessage\">Looks like the name field is empty. Please make sure you enter your name for a personalized experience!</p>";
        //Throw error message if the input is empty
    } else {
        let errorDiv = selector("#errorDiv");
        errorDiv.innerHTML = "<p class=\"errorMessage\">Test message " + userSetting['name']+ "</p>";  
    }
}
