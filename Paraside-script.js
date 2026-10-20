const ParasideBtn = document.getElementById("Paraside-open");
const Paraside = document.querySelector(".Paraside-modal");
const ParasideClose = document.getElementById("Paraside-close");

ParasideBtn.addEventListener("click", () => {
    Paraside.style.display = "flex";
})

ParasideClose.addEventListener("click", () => {
    Paraside.style.display = "none";
})