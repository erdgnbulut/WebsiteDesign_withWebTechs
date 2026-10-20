const PoIBtn = document.getElementById("PoI-open");
const PoI = document.querySelector(".PoI-modal");
const PoIClose = document.getElementById("PoI-close");

PoIBtn.addEventListener("click", () => {
    PoI.style.display = "flex";
})

PoIClose.addEventListener("click", () => {
    PoI.style.display = "none";
})