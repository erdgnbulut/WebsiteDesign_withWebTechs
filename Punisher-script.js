const PunisherBtn = document.getElementById("Punisher-open");
const Punisher = document.querySelector(".Punisher-modal");
const PunisherClose = document.getElementById("Punisher-close");

PunisherBtn.addEventListener("click", () => {
    Punisher.style.display = "flex";
})

PunisherClose.addEventListener("click", () => {
    Punisher.style.display = "none";
})