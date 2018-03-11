let userSetting = {
    name: "",
    tableCount: 0,
    orders: ""
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
welcome += "<button onclick=\"nameInput();\">Be seated! &#8594;</button>";
welcome += "</div>";
// WELCOME PAGE ENDS HERE

function nameInput() {
    userSetting["name"] = selector("#userNameInput").value.toLowerCase();

    if (userSetting["name"] === "") {
        let errorDiv = selector("#errorDiv");
        errorDiv.innerHTML = "<p class=\"errorMessage\">Looks like the name field is empty. Please make sure you enter your name for a personalized experience!</p>";
        //Throw error message if the input is empty
    } else {
        bookFirstPage();
    }
}

// TABLES PAGE
function bookFirstPage () {
    let tablesPage = "\<div class=\"startPageWrapper\">";
    tablesPage += "<div class=\"welcomeWrapper\">";
    tablesPage += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restauran\"draggable=\"false\">";
    tablesPage += "<h1>Nice to meet you " + userSetting["name"] + "!</h1>";
    tablesPage += "<p>Would you be so kind to select the correct amount of seats you'd like to book?</p>";
    tablesPage += "<div class=\"tableCount\">";
    tablesPage += "<input type=\"button\" value=\"1\" onclick=\"tableCounter(1);\">";
    tablesPage += "<input type=\"button\" value=\"2\" onclick=\"tableCounter(2);\">";
    tablesPage += "<input type=\"button\" value=\"4\" onclick=\"tableCounter(4);\">";
    tablesPage += "<input type=\"button\" id=\"customTable\" value=\"Custom\" onclick=\"tableCounterCustom();\">";
    tablesPage += "<div id=\"errorDiv\"></div></div></div>";
    tablesPage += "<button onclick=\"render(welcome);\">&#x2190; Change my name</button>";
    tablesPage += "<button>Proceed to the next step &#x2192;</button><div class=\"steps\">";
    tablesPage += "<p>&#x278A;</p><!-- 1 ACTIVE --><p>&#x2781;</p><!-- 2 INACTIVE --><p>&#x2782;</p><!-- 3 INACTIVE --><p>&#x2783;</p><!-- 4 INACTIVE -->";
    tablesPage += "</div></div></div>";
    render(tablesPage);
}
/*let tablesPage = "\<div class=\"startPageWrapper\">";
tablesPage += "<div class=\"welcomeWrapper\">";
tablesPage += "<img src=\"img/logol.png\" alt=\"Logo of Sunset Restauran\"draggable=\"false\">";
tablesPage += "<h1>Nice to meet you</h1>";
alert(userSetting.name);
tablesPage += "<p>Would you be so kind to select the correct amount of seats you'd like to book?</p>";
tablesPage += "<div class=\"tableCount\">";
tablesPage += "<input type=\"button\" value=\"1\" onclick=\"tableCounter(1);\">";
tablesPage += "<input type=\"button\" value=\"2\" onclick=\"tableCounter(2);\">";
tablesPage += "<input type=\"button\" value=\"4\" onclick=\"tableCounter(4);\">";
tablesPage += "<input type=\"button\" id=\"customTable\" value=\"Custom\" onclick=\"tableCounterCustom();\">";
tablesPage += "<div id=\"errorDiv\"></div></div></div>";
tablesPage += "<button onclick=\"render(welcome);\">&#x2190; Change my name</button>";
tablesPage += "<button>Proceed to the next step &#x2192;</button><div class=\"steps\">";
tablesPage += "<p>&#x278A;</p><!-- 1 ACTIVE --><p>&#x2781;</p><!-- 2 INACTIVE --><p>&#x2782;</p><!-- 3 INACTIVE --><p>&#x2783;</p><!-- 4 INACTIVE -->";
tablesPage += "</div></div></div>";
 */

// TABLES PAGE ENDS HERE