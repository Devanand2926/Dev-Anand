const xpElement = document.querySelector(".xp-count");

let xp = 0;
const targetXP = 1250;

const counter = setInterval(() => {

    xp += 10;

    xpElement.textContent = xp + " XP";

    if(xp >= targetXP){
        clearInterval(counter);
    }

}, 20);


window.addEventListener("load", () => {

    setTimeout(() => {

        alert("Welcome back to CampusX 🚀");

    }, 500);

});