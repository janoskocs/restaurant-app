function selector(element) {
    return document.querySelector(element);
}

function nameInput() {
    let userName = selector("#userNameInput").value.toLowerCase();

    if (userName === "") {
        let errorDiv = selector("#errorDiv");
        errorDiv.innerHTML = "<p class=\"errorMessage\">Looks like the name field is empty. Please make sure you enter your name for a personalized experience!</p>";
        //Throw error message if the input is empty
    } else {
        window.location.replace("../app/book.html");
    }
}
