const EternalBtn = document.getElementById("Eternal-open");
const Eternal = document.querySelector(".Eternal-modal");
const EternalClose = document.getElementById("Eternal-close");

EternalBtn.addEventListener("click", () => {
    Eternal.style.display = "flex";
})

EternalClose.addEventListener("click", () => {
    Eternal.style.display = "none";
})