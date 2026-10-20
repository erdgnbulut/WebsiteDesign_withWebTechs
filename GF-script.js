const GFBtn = document.getElementById("GF-open");
const GF = document.querySelector(".GF-modal");
const GFClose = document.getElementById("GF-close");

GFBtn.addEventListener("click", () => {
    GF.style.display = "flex";
})

GFClose.addEventListener("click", () => {
    GF.style.display = "none";
})