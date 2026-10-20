const TheBoysBtn = document.getElementById("TheBoys-open");
const TheBoys = document.querySelector(".TheBoys-modal");
const TheBoysClose = document.getElementById("TheBoys-close");

TheBoysBtn.addEventListener("click", () => {
    TheBoys.style.display = "flex";
})

TheBoysClose.addEventListener("click", () => {
    TheBoys.style.display = "none";
})