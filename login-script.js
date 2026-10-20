const loginBtn = document.getElementById("open-login");
const login = document.querySelector(".login-modal");
const loginClose = document.getElementById("close-login");

loginBtn.addEventListener("click", () => {
    login.style.display = "flex";
})

loginClose.addEventListener("click", () => {
    login.style.display = "none";
})