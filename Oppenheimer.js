const OppenheimerBtn = document.getElementById("Oppenheimer-open");
const Oppenheimer = document.querySelector(".Oppenheimer-modal");
const OppenheimerClose = document.getElementById("Oppenheimer-close");

OppenheimerBtn.addEventListener("click", () => {
    Oppenheimer.style.display = "flex";
})

OppenheimerClose.addEventListener("click", () => {
    Oppenheimer.style.display = "none";
})