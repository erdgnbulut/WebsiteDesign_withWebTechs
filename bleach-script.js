const bleachBtn = document.getElementById("bleach-open");
const bleach = document.querySelector(".bleach-modal");
const bleachClose = document.getElementById("bleach-close");

bleachBtn.addEventListener("click", () => {
    bleach.style.display = "flex";
})

bleachClose.addEventListener("click", () => {
    bleach.style.display = "none";
})