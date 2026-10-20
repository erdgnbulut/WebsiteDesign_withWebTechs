const GladiatorBtn = document.getElementById("Gladiator-open");
const Gladiator = document.querySelector(".Gladiator-modal");
const GladiatorClose = document.getElementById("Gladiator-close");

GladiatorBtn.addEventListener("click", () => {
    Gladiator.style.display = "flex";
})

GladiatorClose.addEventListener("click", () => {
    Gladiator.style.display = "none";
})