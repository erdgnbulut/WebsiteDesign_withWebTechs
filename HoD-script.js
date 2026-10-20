const HoDBtn = document.getElementById("HoD-open");
const HoD = document.querySelector(".HoD-modal");
const HoDClose = document.getElementById("HoD-close");

HoDBtn.addEventListener("click", () => {
    HoD.style.display = "flex";
})

HoDClose.addEventListener("click", () => {
    HoD.style.display = "none";
})