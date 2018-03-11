

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

function dateFunction() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let yyyy = today.getFullYear();

    return today;
}

function bookedDate() {
    let month = selector("#months");    
    let selectedMonth = month.value;
    
    let day = selector("#days");
    let selectedDay = day.value;

    let year = selector("#years");
    let selectedYear = year.value;
    let wholeDate = new Date();
    wholeDate.setFullYear(selectedYear, selectedMonth, selectedDay);
    return wholeDate;
}

function dateCompare() {
    if ( bookedDate() < dateFunction() ) {
        selector("#dateCheckBtn").value = "Check date!";
        selector("#dateCheckBtn").style.background = "#d86337";
        selector("#errorDiv").innerHTML ="<p class=\"errorMessage\">Sorry, it seems you have picked an earlier date than today.</p>";

    } else {
        userSetting["bookedDate"] = bookedDate(); //SET BOOKED DATE IN JS OBJECT
        selector("#errorDiv").innerHTML = "";
        selector("#dateCheckBtn").style.background = "lightgreen";
        selector("#dateCheckBtn").value = " OK! ";
    }
    
}