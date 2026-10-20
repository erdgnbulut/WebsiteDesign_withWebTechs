const signupBtn = document.getElementById("open-signup");
const signup = document.querySelector(".signup-modal");
const signupClose = document.getElementById("close-modal");

signupBtn.addEventListener("click", () => {
    signup.style.display = "flex";
})

signupClose.addEventListener("click", () => {
    signup.style.display = "none";
})
