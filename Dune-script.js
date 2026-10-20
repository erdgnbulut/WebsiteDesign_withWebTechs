const DuneBtn = document.getElementById("Dune-open");
const Dune = document.querySelector(".Dune-modal");
const DuneClose = document.getElementById("Dune-close");

DuneBtn.addEventListener("click", () => {
    Dune.style.display = "flex";
})

DuneClose.addEventListener("click", () => {
    Dune.style.display = "none";
})