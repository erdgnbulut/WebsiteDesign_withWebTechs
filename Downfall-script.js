const DownfallBtn = document.getElementById("Downfall-open");
const Downfall = document.querySelector(".Downfall-modal");
const DownfallClose = document.getElementById("Downfall-close");

DownfallBtn.addEventListener("click", () => {
    Downfall.style.display = "flex";
})

DownfallClose.addEventListener("click", () => {
    Downfall.style.display = "none";
})