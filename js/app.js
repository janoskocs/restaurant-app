
let userSetting = {
    name: "",
    seatCount: 0,
    bookedDate: "",
    bookedTime: ""
}; //VARIABLE THAT HOLDS INFO THROUGHOUT BOOKING PROCESS
let orders = [];

function selector(element) {
    return document.querySelector(element);
} //DOM SELECTOR FUNCTION

function render(htmlMarkup) {
    let appFrame = selector("#appFrame").innerHTML = htmlMarkup;
} //DOM PRINTER FUNCTION

//PAGE BUILDER STARTS HERE
function namePage() { 
    let namePageHTML = "<div class=\"pageContainer\">";

    namePageHTML += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restaurant\" draggable=\"false\">";
    //LOGO
    namePageHTML += "<div id=\"header\"><h1>Welcome to Sunset Restaurant</h1>";
    namePageHTML += "<p>This is Sarah, your interactive online waitress!</p></div>";
    //HEADER
    namePageHTML += "<div id=\"customerNameInput\"><input id=\"userNameInput\" type=\"text\" placeholder=\"May I take your name?\"></div>";
    //INPUT
    namePageHTML += "<div id=\"errorBox\"></div>";
    //ERRORBOX
    namePageHTML += "<button onclick=\"nameInput();\">Be seated! &#8594;</button>";
    //BUTTON
    namePageHTML += "</div>"; //.pageContainer END DIV
    render(namePageHTML);
}
namePage();

function nameInput() {
    userSetting["name"] = selector("#userNameInput").value.toLowerCase();
    //SELECTING VALUE AND ASSIGNING THE CUSTOMER NAME

    if (userSetting["name"] === "") {
        let errorDiv = selector("#errorBox");
        errorDiv.innerHTML = "<p>Looks like the name field is empty. Please make sure you enter your name for a personalized experience!</p>";
        errorDiv.style.visibility = "visible";
        //Throw error message if the input is empty
    } else {
        seatPage();
        //RENDERS NEXT PAGE
    }
}

//SEATPAGE STARTS HERE
function seatPage() {
    let seatPageHTML = "<div class=\"pageContainer\">";

    seatPageHTML += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restaurant\" draggable=\"false\">";
    //LOGO

    seatPageHTML += "<div id=\"header\"><h1>Nice to meet you " + userSetting["name"] + "!</h1>";
    seatPageHTML += "<p>Would you be so kind to select the correct amount of seats you'd like to book? Don't worry you can always go back and change your mind.</p></div>";
    //HEADER

    seatPageHTML += "<div class=\"tableCount\">";

    seatPageHTML += "<input type=\"button\" value=\"1\" onclick=\"seatCounter(1);\">";
    seatPageHTML += "<input type=\"button\" value=\"2\" onclick=\"seatCounter(2);\">";
    seatPageHTML += "<input type=\"button\" value=\"3\" onclick=\"seatCounter(3);\">";
    seatPageHTML += "<input type=\"button\" id=\"customCount\" value=\"Custom\" onclick=\"seatCounterCustom();\">";

    seatPageHTML += "</div>";
    //TABLE COUNT BUTTONS

    seatPageHTML += "<div id=\"errorBox\"></div>";
    //ERROR BOX

    seatPageHTML += "<div id=\"buttons\">";
    seatPageHTML += "<button onclick=\"namePage();\">&#x2190; Change my name</button>";
    seatPageHTML += "<button onclick=\"canProceed();\">Proceed to the next step &#x2192;</button>";
    seatPageHTML += "</div>";
    //NAVIGATION BUTTONS

    seatPageHTML += "<div class=\"steps\">";
    seatPageHTML += "<p>&#x278A;</p>";
    seatPageHTML += "<p>&#x2781;</p>";
    seatPageHTML += "<p>&#x2782;</p>";
    seatPageHTML += "<p>&#x2783;</p>";
    seatPageHTML += "<p>&#x2784;</p>";
    seatPageHTML += "</div>";
    //STEPS 

    seatPageHTML += "</div>";
    //SEATPAGE ENDS HERE

    render(seatPageHTML);
}

function seatCounterCustom() {
    let custom = selector("#customCount");
    custom.setAttribute("value", "");
    custom.setAttribute("placeholder", "Please enter a number");
    custom.setAttribute("type", "text");
    //CHANGE CUSTOM BUTTON TO INPUT TYPE TEXT
    custom.addEventListener('mouseout', function() { 
        if (custom.value !== "") {
            let customNumber = parseInt(custom.value);
            if (!isNaN(customNumber)) {
                selector("#errorBox").style.visibility = "hidden"; // RESET ERROR BOX
                userSetting["seatCount"] = custom.value;
                custom.style.backgroundColor = "lightgreen";
                //CHECK IF ITS A NUMBER, RESET ERROBOX, ASSIGN VALUE TO OBJECT
            } else {
                selector("#errorBox").innerHTML = "<p> " + custom.value + " is not a number!</p>";
                selector("#errorBox").style.visibility = "visible";
                //ERROR HANDLER
            }
        }
     }, false);
}

function seatCounter(seatCount) {
    userSetting["seatCount"] = seatCount;
    //ASSIGN SEAT COUNT TO OBJECT
    let tableCountBtn = "input:nth-child(" + seatCount + ")";
    selector(tableCountBtn).style.backgroundColor = "lightgreen";
    //REFACTOR THIS!
}

function canProceed() {
    if ( userSetting["seatCount"] === 0 ) {
        selector("#errorBox").innerHTML = "<p>Sorry, you must select at least one seat in order to continue.</p>";
        selector("#errorBox").style.visibility = "visible";
    } else {
        selector("#errorBox").visibility = "hidden";
        //RESET ERROR BOX
        datePickPage();
        //TRIGGER NEXT PAGE
    }
}//canProceed is on the seatPickPage!

function datePickPage() {
    let datePickPageHTML = "<div class=\"pageContainer\">";

    datePickPageHTML += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restaurant\" draggable=\"false\">";
    //LOGO

    datePickPageHTML += "<div id=\"header\"><h1>Sunset Restaurant</h1>";
    datePickPageHTML += "<p>Thank you <span id=\"customerName\">" + userSetting["name"] + "!</span> You have selected " + userSetting["seatCount"] + " seat(s). On this page, please go ahead and select the date.</p></div>";
    //HEADER

    datePickPageHTML += "<div class=\"datePicker\">";
    datePickPageHTML += "<select id=\"months\">";

    datePickPageHTML += "<option value=\"0\">January</option>";
    datePickPageHTML += "<option value=\"1\">February</option>";
    datePickPageHTML += "<option value=\"2\">March</option>";
    datePickPageHTML += "><option value=\"3\">April</option>";
    datePickPageHTML += "<option value=\"4\">May</option>";
    datePickPageHTML += "><option value=\"5\">June</option>";
    datePickPageHTML += "<option value=\"6\">July</option>";
    datePickPageHTML += "<option value=\"7\">August</option>";
    datePickPageHTML += "<option value=\"8\">September</option>";
    datePickPageHTML += "<option value=\"9\">October</option>";
    datePickPageHTML += "<option value=\"10\">November</option>";
    datePickPageHTML += "<option value=\"11\">December</option>";
    datePickPageHTML += "</select>";
    //MONTHS

    datePickPageHTML += "<select id=\"days\">"; 
    for (let i = 1; i <= 31; i++) {
        let string = "<option value=\"" + i + "\">" + i + "</option>";
        datePickPageHTML += string;
    }
    datePickPageHTML += "</select>";
    //DATE GENERATOR

    datePickPageHTML += "<select id=\"years\">";
    datePickPageHTML += "<option value=\"2018\">2018</option>";
    datePickPageHTML += "<option value=\"2019\">2019</option>";
    datePickPageHTML += "</select>";
    //YEARS

    datePickPageHTML += "<input id=\"dateCheckBtn\" type=\"button\" value=\"Check date!\" onclick=\"dateCompare();\">";
    //DATE CHECK FUNCTION

    datePickPageHTML += "</div>";
    //DATE PICKER ENDS
    
    datePickPageHTML += "<div id=\"errorBox\"></div>"; 
    //ERROR BOX

    datePickPageHTML += "<div id=\"buttons\">";
    datePickPageHTML += "\"><button onclick=\"seatPage();\">&#x2190; Change the amount of seats</button>";
    datePickPageHTML += "<button onclick=\"canProceedToTime();\">Proceed to the next step &#x2192;</button>";
    datePickPageHTML += "></div>";
    //NAVIGATION BUTTONS

    datePickPageHTML += "<div class=\"steps\">";
    datePickPageHTML += "<p>&#x278A;</p>";
    datePickPageHTML += "<p>&#x2777;</p>";
    datePickPageHTML += "<p>&#x2782;</p>";
    datePickPageHTML += "<p>&#x2783;</p>";
    datePickPageHTML += "<p>&#x2784;</p>";
    datePickPageHTML += "</div>";
    //STEPS
    datePickPageHTML += "</div>";//PAGE CONTAINER END
    render(datePickPageHTML);
}

function dateFunction() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let yyyy = today.getFullYear();
    return today;
    /*GET TODAYS DATE SO IT CAN BE COMPARED
    WITH THE USERS INPUT*/
}

function bookedDate() {
    let month = selector("#months");    
    let selectedMonth = month.value;
    //GET MONTH
    let day = selector("#days");
    let selectedDay = day.value;
    //GET DATE
    let year = selector("#years");
    let selectedYear = year.value;
    //GET YEAR
    let wholeDate = new Date();
    wholeDate.setFullYear(selectedYear, selectedMonth, selectedDay);//SET FULL YEAR SO IT CAN BE COMPARED
    return wholeDate;
}

function dateCompare() {
    let flag = false;
    if ( bookedDate() < dateFunction() ) {
        selector("#dateCheckBtn").value = "Check date!";
        selector("#dateCheckBtn").style.background = "#d86337";
        selector("#errorBox").innerHTML ="<p>Sorry, it seems you have picked an earlier date than today.</p>";
        return flag;
    } else {
        userSetting["bookedDate"] = bookedDate(); //SET BOOKED DATE IN JS OBJECT
        selector("#errorBox").innerHTML = "";
        selector("#dateCheckBtn").style.background = "lightgreen";
        selector("#dateCheckBtn").value = " OK! ";
        flag = true;
        return flag;
    }
}

function canProceedToTime() {
    dateCompare();
    if( userSetting["bookedDate"] === "" ) {
        selector("#errorDiv").innerHTML ="<p class=\"errorMessage\">Sorry, it seems you have picked an earlier date than today. Please select a valid date in order to proceed to the next page.</p>"; //IF USER HASNT SELECTED DATE AND CLICKS CONTINUE
    } else {
        timePickPage();//TRIGGERS NEXT PAGE
    }
}
//DATE PICK PAGE ENDS HERE

function timePickPage() {
    let timePickPageHTML = "<div class=\"pageContainer\">";

    timePickPageHTML += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restaurant\" draggable=\"false\">";
    //LOGO
    timePickPageHTML += "<div id=\"header\"><h1>Sunset Restaurant</h1>";
    timePickPageHTML += "<p>Great! What time would you like to come?</p></div>";
    //HEADER
    timePickPageHTML += "<div class=\"datePicker\">";
    timePickPageHTML += "<select id=\"setTimeHour\">";

    for (let i = 8; i <= 20; i++) {
        let string = "<option value=\"" + i + "\">" + i + "</option>";
        timePickPageHTML += string;
    }
    timePickPageHTML += "</select>";
    //HOUR SELECTOR


    timePickPageHTML += "<select id=\"setTimeMins\">";
    timePickPageHTML += "<option value=\"00\">00</option>";
    timePickPageHTML += "<option value=\"15\">15</option>";
    timePickPageHTML += "<option value=\"30\">30</option>";
    timePickPageHTML += "<option value=\"45\">45</option>";
    timePickPageHTML += "</select>";
    timePickPageHTML += "</div>"
    //MINUTE SELECTOR


    timePickPageHTML += "<div id=\"errorBox\"></div>";
    //ERROR BOX

    timePickPageHTML += "<div id=\"buttons\">";
    timePickPageHTML += "<button onclick=\"namePage();\">&#x2190; Start over</button>";
    timePickPageHTML += "<button onclick=\"setTime();\">Proceed to the next step &#x2192;</button>";
    timePickPageHTML += "</div>";
    //NAVIGATION

    timePickPageHTML += "<div class=\"steps\">";
    timePickPageHTML += "<p>&#x278A;</p>";
    timePickPageHTML += "<p>&#x2777;</p>";
    timePickPageHTML += "<p>&#x2778;</p>";
    timePickPageHTML += "<p>&#x2783;</p>";
    timePickPageHTML += "<p>&#x2784;</p>";
    timePickPageHTML += "</div>";
    //STEPS

    timePickPageHTML += "</div>"; //PAGE CONTAINER END
    render(timePickPageHTML);
}

function setTime() {
    let setTime;
    setTime = selector("#setTimeHour").value;
    setTime += ":" + selector("#setTimeMins").value;
    userSetting["bookedTime"] = setTime;
    //ASSIGN TIME TO THE OBJECT
    let questionBox = selector("#errorBox");
    questionBox.innerHTML = "Is " + userSetting["bookedTime"] + " good for you?<input type=\"button\" value=\"Yes\" onclick=\"orderPickPage();\"><input type=\"button\" value=\"Check the time again!\" onclick=\"setTime();\">"; //GENERATE QUESTION IN ERROR BOX
    questionBox.style.color = "#19628d";
    questionBox.style.visibility = "visible";
}

//TIME PICK PAGE ENDS HERE

function orderPickPage() {
    let orderPickPageHTML = "<div class=\"pageContainer\">";

    orderPickPageHTML += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restaurant\" draggable=\"false\">";

    orderPickPageHTML += "<div id=\"header\"><h1>Sunset Restaurant</h1>";
    orderPickPageHTML += "<p>Are you feeling hungry already <span id=\"customerName\">" + userSetting["name"] + "?</span> If you'd like, you can pre-order your meal so you won't have to wait!</p></div>";

    orderPickPageHTML += "<div id=\"foodPicker\">";
    orderPickPageHTML += "<input type=\"button\" value=\"+Braised Leeks with Mozzarella+\" onclick=\"addFoodToObject(1);\">";
    orderPickPageHTML += "<input type=\"button\" value=\"+Lamb Salad with Fregola+\" onclick=\"addFoodToObject(2);\">";
    orderPickPageHTML += "<input type=\"button\" value=\"+Smoked Pork Jowl+\" onclick=\"addFoodToObject(3);\">";
    orderPickPageHTML += "<input type=\"button\" value=\"+Scallop Sashimi+\" onclick=\"addFoodToObject(4);\">";
    orderPickPageHTML += "<input type=\"button\" value=\"+Vegan Charcuterie+\" onclick=\"addFoodToObject(5);\">";
    orderPickPageHTML += "</div>";
    //FOOD LIST END

    orderPickPageHTML += "<div id=\"errorBox\"></div>";

    orderPickPageHTML += "<div id=\"buttons\">";
    orderPickPageHTML += "<button onclick=\"namePage();\">&#x2190; Star over</button>";
    orderPickPageHTML += "<button onclick=\"confirmationPage();\">&#x279A; No thanks, I'll pass &#x2798;</button>";
    orderPickPageHTML += "<button onclick=\"confirmationPage();\">Review and finish &#x2192;</button>";
    orderPickPageHTML += "</div>";
    //NAVIGATION

    orderPickPageHTML += "<div class=\"steps\">";
    orderPickPageHTML += "<p>&#x278A;</p>";
    orderPickPageHTML += "<p>&#x2777;</p>";
    orderPickPageHTML += "<p>&#x278C;</p>";
    orderPickPageHTML += "<p>&#x278D;</p>";
    orderPickPageHTML += "<p>&#x2784;</p>";
    orderPickPageHTML += "</div>";
    //STEPS

    orderPickPageHTML += "</div>";//PAGE CONTAINER END
    render(orderPickPageHTML);
}

function addFoodToObject(food) {
    orders.push(food);
    
    let nthChildSelector = "input:nth-child(" + food + ")";
    selector(nthChildSelector).style.backgroundColor = "lightgreen";

    //ADD FUNCTION TO REMOVE FOODS
}

//PRE-ORDER FOOD PAGE ENDS HERE

function confirmationPage() {
    let confirmationHTML = "<div class=\"pageContainer\">";

    confirmationHTML += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restaurant\" draggable=\"false\">";
    //LOGO

    confirmationHTML += "<div id=\"header\"><h1>Thank you so much " + userSetting["name"] + " for booking! </h1>";
    confirmationHTML += "<p>I hope you enjoyed this experience! My name was Sarah, your first ever online waitress!</p></div>";
    //HEADER

    confirmationHTML += "<div id=\"confirmBox\">";
    confirmationHTML += "<p>Your name is <span id=\"customerName\">" + userSetting["name"] + "</span>.</p>";
    confirmationHTML += "<p>You have booked " + userSetting["seatCount"] + " seat(s).</p>";
    confirmationHTML += "You will be coming on " + userSetting["bookedDate"] + " at " + userSetting["bookedTime"] + ".</p>";
    confirmationHTML += "Also, you have pre-ordered " + orders + ".</p>";
    confirmationHTML += "</div>";
    //CONFIRMATION BOX

    confirmationHTML += "<div id=\"buttons\">";
    confirmationHTML += "<a href=\"http://janoskocs.com\">janoskocs.com</a>";
    confirmationHTML += "</div>";


    confirmationHTML += "<div class=\"steps\">";
    confirmationHTML += "<p>&#x278A;</p>";
    confirmationHTML += "<p>&#x2777;</p>";
    confirmationHTML += "<p>&#x278C;</p>";
    confirmationHTML += "<p>&#x278D;</p>";
    confirmationHTML += "<p>&#x278E;</p>";
    confirmationHTML += "</div>";

    render(confirmationHTML);

}