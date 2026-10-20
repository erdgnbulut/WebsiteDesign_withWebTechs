const VforBtn = document.getElementById("Vfor-open");
const Vfor = document.querySelector(".Vfor-modal");
const VforClose = document.getElementById("Vfor-close");

VforBtn.addEventListener("click", () => {
    Vfor.style.display = "flex";
})

VforClose.addEventListener("click", () => {
    Vfor.style.display = "none";
})