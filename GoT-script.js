const GoTBtn = document.getElementById("GoT-open");
const GoT = document.querySelector(".GoT-modal");
const GoTClose = document.getElementById("GoT-close");

GoTBtn.addEventListener("click", () => {
    GoT.style.display = "flex";
})

GoTClose.addEventListener("click", () => {
    GoT.style.display = "none";
})