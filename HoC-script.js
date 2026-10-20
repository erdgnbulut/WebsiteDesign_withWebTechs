const HoCBtn = document.getElementById("HoC-open");
const HoC = document.querySelector(".HoC-modal");
const HoCClose = document.getElementById("HoC-close");

HoCBtn.addEventListener("click", () => {
    HoC.style.display = "flex";
})

HoCClose.addEventListener("click", () => {
    HoC.style.display = "none";
})