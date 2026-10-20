const PBBtn = document.getElementById("PB-open");
const PB = document.querySelector(".PB-modal");
const PBClose = document.getElementById("PB-close");

PBBtn.addEventListener("click", () => {
    PB.style.display = "flex";
})

PBClose.addEventListener("click", () => {
    PB.style.display = "none";
})