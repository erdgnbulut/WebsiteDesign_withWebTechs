const horimiyaBtn = document.getElementById("horimiya-open");
const horimiya = document.querySelector(".horimiya-modal");
const horimiyaClose = document.getElementById("horimiya-close");

horimiyaBtn.addEventListener("click", () => {
    horimiya.style.display = "flex";
})

horimiyaClose.addEventListener("click", () => {
    horimiya.style.display = "none";
})