const MentalistBtn = document.getElementById("Mentalist-open");
const Mentalist = document.querySelector(".Mentalist-modal");
const MentalistClose = document.getElementById("Mentalist-close");

MentalistBtn.addEventListener("click", () => {
    Mentalist.style.display = "flex";
})

MentalistClose.addEventListener("click", () => {
    Mentalist.style.display = "none";
})