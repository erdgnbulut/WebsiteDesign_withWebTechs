const JokerBtn = document.getElementById("Joker-open");
const Joker = document.querySelector(".Joker-modal");
const JokerClose = document.getElementById("Joker-close");

JokerBtn.addEventListener("click", () => {
    Joker.style.display = "flex";
})

JokerClose.addEventListener("click", () => {
    Joker.style.display = "none";
})