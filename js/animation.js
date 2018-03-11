
let welcomeWrapper = selector(".welcomeWrapper");
let opacity = 0;

function fadeIn() {
    welcomeWrapper.style.opacity = opacity;
    opacity += 0.01;
}
setInterval(fadeIn, 15);