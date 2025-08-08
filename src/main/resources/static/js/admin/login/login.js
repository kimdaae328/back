const checkbox = document.getElementById("auto-login-checkbox");
const icon = document.querySelector(".mdi.mdi-check");
checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
        icon.style.display = "inline-block";
    } else {
        icon.style.display = "none";
    }
});

const loginbutton = document.getElementById("login-button");
const emailinput = document.getElementById("email-input");
const passwordinput = document.getElementById("password-input");
const emailmodal = document.getElementById("email-test");
const passwordmodal = document.getElementById("password-test");
loginbutton.addEventListener("click", (e) => {
    emailmodal.style.display = "inline";
});
