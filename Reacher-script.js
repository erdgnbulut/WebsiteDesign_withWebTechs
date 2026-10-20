const ReacherBtn = document.getElementById("Reacher-open");
const Reacher = document.querySelector(".Reacher-modal");
const ReacherClose = document.getElementById("Reacher-close");

ReacherBtn.addEventListener("click", () => {
    Reacher.style.display = "flex";
})

ReacherClose.addEventListener("click", () => {
    Reacher.style.display = "none";
})