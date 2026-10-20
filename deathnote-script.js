const deathnoteBtn = document.getElementById("deathnote-open");
const deathnote = document.querySelector(".deathnote-modal");
const deathnoteClose = document.getElementById("deathnote-close");
deathnoteBtn.addEventListener("click", () => {
    deathnote.style.display = "flex";
})

deathnoteClose.addEventListener("click", () => {
    deathnote.style.display = "none";
})
