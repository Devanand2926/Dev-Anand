const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    window.location.href = "dashboard.html";

});