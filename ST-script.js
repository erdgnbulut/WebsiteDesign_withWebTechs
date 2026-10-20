const STBtn = document.getElementById("ST-open");
const ST = document.querySelector(".ST-modal");
const STClose = document.getElementById("ST-close");

STBtn.addEventListener("click", () => {
    ST.style.display = "flex";
})

STClose.addEventListener("click", () => {
    ST.style.display = "none";
})