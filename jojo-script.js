const jojoBtn = document.getElementById("jojo-open");
const jojo = document.querySelector(".jojo-modal");
const jojoClose = document.getElementById("jojo-close");

jojoBtn.addEventListener("click", () => {
    jojo.style.display = "flex";
})

jojoClose.addEventListener("click", () => {
    jojo.style.display = "none";
})