const BarbieBtn = document.getElementById("Barbie-open");
const Barbie = document.querySelector(".Barbie-modal");
const BarbieClose = document.getElementById("Barbie-close");

BarbieBtn.addEventListener("click", () => {
    Barbie.style.display = "flex";
})

BarbieClose.addEventListener("click", () => {
    Barbie.style.display = "none";
})