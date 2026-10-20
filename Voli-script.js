const VoliBtn = document.getElementById("Voli-open");
const Voli = document.querySelector(".Voli-modal");
const VoliClose = document.getElementById("Voli-close");

VoliBtn.addEventListener("click", () => {
    Voli.style.display = "flex";
})

VoliClose.addEventListener("click", () => {
    Voli.style.display = "none";
})