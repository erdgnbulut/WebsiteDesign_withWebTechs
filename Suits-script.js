const SuitsBtn = document.getElementById("Suits-open");
const Suits = document.querySelector(".Suits-modal");
const SuitsClose = document.getElementById("Suits-close");

SuitsBtn.addEventListener("click", () => {
    Suits.style.display = "flex";
})

SuitsClose.addEventListener("click", () => {
    Suits.style.display = "none";
})