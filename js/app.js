function selector(element) {
    return document.querySelector(element);
}

function nameInput() {
    let userNameInputBox = selector("#userNameInput");
    userNameInputBox.style.visibility = "visible";
}