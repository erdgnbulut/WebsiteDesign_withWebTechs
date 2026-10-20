const overlordBtn = document.getElementById("overlord-open");
const overlord = document.querySelector(".overlord-modal");
const overlordClose = document.getElementById("overlord-close");

overlordBtn.addEventListener("click", () => {
    overlord.style.display = "flex";
})

overlordClose.addEventListener("click", () => {
    overlord.style.display = "none";
})