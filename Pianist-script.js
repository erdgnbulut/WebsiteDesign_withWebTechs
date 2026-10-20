const PianistBtn = document.getElementById("Pianist-open");
const Pianist = document.querySelector(".Pianist-modal");
const PianistClose = document.getElementById("Pianist-close");

PianistBtn.addEventListener("click", () => {
    Pianist.style.display = "flex";
})

PianistClose.addEventListener("click", () => {
    Pianist.style.display = "none";
})