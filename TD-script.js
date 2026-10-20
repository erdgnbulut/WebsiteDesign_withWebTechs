const TDBtn = document.getElementById("TD-open");
const TD = document.querySelector(".TD-modal");
const TDClose = document.getElementById("TD-close");

TDBtn.addEventListener("click", () => {
    TD.style.display = "flex";
})

TDClose.addEventListener("click", () => {
    TD.style.display = "none";
})