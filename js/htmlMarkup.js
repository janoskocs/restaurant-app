let userSetting = {
    name: "",
    tableCount: 0,
    bookedDate: "",
    bookedTime: "",
    orders: []
};

// WELCOME PAGE 

let welcome = "<div class=\"startPageWrapper\">";
welcome += "<div class=\"welcomeWrapper\">";
welcome += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restaurant\" draggable=\false\">";
welcome += "<h1>Welcome to Sunset Restaurant</h1>";
welcome += "<p>This is Sarah, your interactive online waitress!</p>";
welcome += "<div class=\"userName\">";
welcome += "<input id=\"userNameInput\" type=\"text\" placeholder=\"May I take your name?\">";
welcome += "</div></div>";
welcome += "<div id=\"errorDiv\"></div>";
welcome += "<div id=\"buttons\"><button onclick=\"nameInput();\">Be seated! &#8594;</button></div>";
welcome += "</div>";
// WELCOME PAGE ENDS HERE

function nameInput() {
    userSetting["name"] = selector("#userNameInput").value.toLowerCase();

    if (userSetting["name"] === "") {
        let errorDiv = selector("#errorDiv");
        errorDiv.innerHTML = "<p class=\"errorMessage\">Looks like the name field is empty. Please make sure you enter your name for a personalized experience!</p>";
        //Throw error message if the input is empty
    } else {
        //blur();
        bookFirstPage();
    }
}

// TABLES PAGE
function bookFirstPage () {
    let tablesPage = "\<div class=\"startPageWrapper\">";
    tablesPage += "<div class=\"welcomeWrapper\">";
    tablesPage += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restauran\"draggable=\"false\">";
    tablesPage += "<h1>Nice to meet you " + userSetting["name"] + "!</h1>";
    tablesPage += "<p>Would you be so kind to select the correct amount of seats you'd like to book? Don't worry you can always go back and change your mind.</p>";
    tablesPage += "<div class=\"tableCount\">";
    tablesPage += "<input type=\"button\" value=\"1\" onclick=\"tableCounter(1);\">";
    tablesPage += "<input type=\"button\" value=\"2\" onclick=\"tableCounter(2);\">";
    tablesPage += "<input type=\"button\" value=\"4\" onclick=\"tableCounter(4);\">";
    tablesPage += "<input type=\"button\" id=\"customTable\" value=\"Custom\" onclick=\"tableCounterCustom();\">";
    tablesPage += "<div id=\"errorDiv\"></div></div></div>";
    tablesPage += "<div id=\"buttons\"><button onclick=\"render(welcome);\">&#x2190; Change my name</button>";
    tablesPage += "<button onclick=\"datePickPage();\">Proceed to the next step &#x2192;</button></div><div class=\"steps\">";
    tablesPage += "<p>&#x278A;</p><!-- 1 ACTIVE --><p>&#x2781;</p><!-- 2 INACTIVE --><p>&#x2782;</p><!-- 3 INACTIVE --><p>&#x2783;</p><!-- 4 INACTIVE --><p>&#x2784;</p>";
    tablesPage += "</div></div></div>";
    render(tablesPage);
}


// TABLES PAGE ENDS HERE

// DATE PICKER PAGE

function datePickPage() {
    let datePickPage = "<div class=\"startPageWrapper\">";
    datePickPage += "<div class=\"welcomeWrapper\">";
    datePickPage += "<img src=\"../img/logol.png\" alt=\"Logo of Sunset Restaurant\" draggable=\"false\"><h1>The Sunset Restaurant</h1>";
    datePickPage += "<p>Okay <span id=\"customerName\">" + userSetting['name'] + "</span>, you have selected " +  userSetting['tableCount'] + " seat(s). Please select the booking date.</p>";
    datePickPage += "<div class=\"datePicker\"><select id=\"months\">";
    datePickPage += "<option value=\"0\">January</option><option value=\"1\">February</option><option value=\"2\">March</option><option value=\"3\">April</option>";
    datePickPage += "<option value=\"4\">May</option><option value=\"5\">June</option><option value=\"6\">July</option><option value=\"7\">August</option><option value=\"8\">September</option>";
    datePickPage += "<option value=\"9\">October</option><option value=\"10\">November</option><option value=\"11\">December</option></select>";
    datePickPage += "<select id=\"days\"><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option><option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option><option value=\"16\">16</option>";
    datePickPage += "<option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option><option value=\"21\">21</option><option value=\"22\">22</option><option value=\"23\">23</option><option value=\"24\">24</option><option value=\"25\">25</option><option value=\"26\">26</option><option value=\"27\">27</option><option value=\"28\">28</option><option value=\"29\">29</option><option value=\"30\">30</option><option value=\"31\">31</option></select>";
    datePickPage += "<select id=\"years\"><option value=\"2018\">2018</option><option value=\"2019\">2019</option></select>";
    datePickPage += "<input id=\"dateCheckBtn\" type=\"button\" value=\"Check date!\" onclick=\"dateCompare();\"></div><div id=\"errorDiv\"></div>";
    datePickPage += "</div><div id=\"buttons\"><button onclick=\"bookFirstPage();\">&#x2190; Change the amount of seats</button><button onclick=\"canProceed();\">Proceed to the next step &#x2192;</button></div><div class=\"steps\">";
    datePickPage += "<p>&#x278A;</p><p>&#x2777;</p><p>&#x2782;</p><p>&#x2783;</p><p>&#x2784;</p>";
    datePickPage += "</div></div>";
    render(datePickPage);
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
    let flag = false;
    if ( bookedDate() < dateFunction() ) {
        selector("#dateCheckBtn").value = "Check date!";
        selector("#dateCheckBtn").style.background = "#d86337";
        selector("#errorDiv").innerHTML ="<p class=\"errorMessage\">Sorry, it seems you have picked an earlier date than today.</p>";
        return flag;

    } else {
        userSetting["bookedDate"] = bookedDate(); //SET BOOKED DATE IN JS OBJECT
        selector("#errorDiv").innerHTML = "";
        selector("#dateCheckBtn").style.background = "lightgreen";
        selector("#dateCheckBtn").value = " OK! ";
        flag = true;
        return flag;
    }
}

function canProceed() {
    dateCompare();
    if( userSetting["bookedDate"] === "" ) {
        selector("#errorDiv").innerHTML ="<p class=\"errorMessage\">Sorry, it seems you have picked an earlier date than today. Please select a valid date in order to proceed to the next page.</p>";
    } else {
        timePickPage();//TRIGGERS NEXT PAGE
    }
}
// DATE PICKER PAGE ENDS HERE

function timePickPage () {

    let timePickPage = "<div class=\"startPageWrapper\"><div class=\"welcomeWrapper\">";
    timePickPage += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restaurant\" draggable=\"false\"><h1>The Sunset Restaurant</h1><p>Great! What time would you like to come?</p>";
    timePickPage += "<div class=\"datePicker\"><select id=\"setTimeHour\">";
    timePickPage += "<option value=\"08\">08</option><option value=\"09\">09</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option><option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option>";
    timePickPage += "<option value=\"16\">16</option><option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option></select>";
    timePickPage += "<select id=\"setTimeMins\"><option value=\"00\">00</option><option value=\"15\">15</option><option value=\"30\">30</option><option value=\"45\">45</option></select><div id=\"errorDiv\"></div></div></div>";
    timePickPage += "<div id=\"buttons\"><button onclick=\"render(welcome);\">&#x2190; Start over</button>";
    timePickPage += "<button onclick=\"setOrder();\">Proceed to the next step &#x2192;</button></div><div class=\"steps\">";
    timePickPage += "<p>&#x278A;</p><p>&#x2777;</p><p>&#x2778;</p><p>&#x2783;</p><p>&#x2784;</p></div></div>";
    render(timePickPage);
}

function setTime() {
    let setTime;
    setTime = selector("#setTimeHour").value;
    setTime += ":" + selector("#setTimeMins").value;
    userSetting["bookedTime"] = setTime;
    setOrder();
}

//TIME PICKER ENDS HERE

function setOrder() {
    let setOrderPage = "<div class=\"startPageWrapper\"><div class=\"welcomeWrapper\">";
    setOrderPage += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restaurant\" draggable=\"false\">";
    setOrderPage += "<p>You can pre-order our finest dishes so you don't have to wait until the food is prepared! Click on a dish to add to your order.</p>";
    setOrderPage += "<div id=\"foodPicker\">";
    setOrderPage += "<input type=\"button\" value=\"Braised Leeks with Mozzarella\">";
    setOrderPage += "<input type=\"button\" value=\"Lamb Salad with Fregola\">";
    setOrderPage += "<input type=\"button\" value=\"Smoked Pork Jowl\">";
    setOrderPage += "<input type=\"button\" value=\"Scallop Sashimi\">";
    setOrderPage += "<input type=\"button\" value=\"Vegan Charcuterie\">";
    setOrderPage += "</div><div id=\"errorDiv\"></div>";
    setOrderPage += "</div><div id=\"buttons\"><button onclick=\"render(welcome);\">&#x2190; Star over</button>";
    setOrderPage += "<button onclick=\"setConfirmationPage();\">&#x279A; No thanks, I'll pass &#x2798;</button>";
    setOrderPage += "<button onclick=\"setPaymenPage();\">Proceed to the next step &#x2192;</button></div>";
    setOrderPage += "<div class=\"steps\"><p>&#x278A;</p><p>&#x2777;</p><p>&#x278C;</p><p>&#x278D;</p><p>&#x2784;</p></div></div>";
    render(setOrderPage);
}

function foodAdder(x) {
    alert(x);
}

//SETORDERPAGE ENDS HERE

function setPaymentPage () {
    alert("under dev, payment");
}

function setConfirmationPage() {
    alert("under development, confirm page");
}