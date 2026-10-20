const mashleBtn = document.getElementById("mashle-open");
const mashle = document.querySelector(".mashle-modal");
const mashleClose = document.getElementById("mashle-close");

mashleBtn.addEventListener("click", () => {
    mashle.style.display = "flex";
})

mashleClose.addEventListener("click", () => {
    mashle.style.display = "none";
})
