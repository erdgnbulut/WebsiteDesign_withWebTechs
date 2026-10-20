const CasablancaBtn = document.getElementById("Casablanca-open");
const Casablanca = document.querySelector(".Casablanca-modal");
const CasablancaClose = document.getElementById("Casablanca-close");

CasablancaBtn.addEventListener("click", () => {
    Casablanca.style.display = "flex";
})

CasablancaClose.addEventListener("click", () => {
    Casablanca.style.display = "none";
})