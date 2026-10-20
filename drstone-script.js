const drstoneBtn = document.getElementById("drstone-open");
const drstone = document.querySelector(".drstone-modal");
const drstoneClose = document.getElementById("drstone-close");
drstoneBtn.addEventListener("click", () => {
    drstone.style.display = "flex";
})

drstoneClose.addEventListener("click", () => {
    drstone.style.display = "none";
})
