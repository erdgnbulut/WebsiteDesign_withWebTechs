const DarkKnightBtn = document.getElementById("DarkKnight-open");
const DarkKnigth = document.querySelector(".DarkKnight-modal");
const DarkKnightClose = document.getElementById("DarkKnight-close");

DarkKnightBtn.addEventListener("click", () => {
    DarkKnigth.style.display = "flex";
})

DarkKnightClose.addEventListener("click", () => {
    DarkKnigth.style.display = "none";
})