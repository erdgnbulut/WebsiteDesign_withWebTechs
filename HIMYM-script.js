const HIMYMBtn = document.getElementById("HIMYM-open");
const HIMYM = document.querySelector(".HIMYM-modal");
const HIMYMClose = document.getElementById("HIMYM-close");

HIMYMBtn.addEventListener("click", () => {
    HIMYM.style.display = "flex";
})

HIMYMClose.addEventListener("click", () => {
    HIMYM.style.display = "none";
})