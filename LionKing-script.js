const LionKingBtn = document.getElementById("LionKing-open");
const LionKing = document.querySelector(".LionKing-modal");
const LionKingClose = document.getElementById("LionKing-close");

LionKingBtn.addEventListener("click", () => {
    LionKing.style.display = "flex";
})

LionKingClose.addEventListener("click", () => {
    LionKing.style.display = "none";
})