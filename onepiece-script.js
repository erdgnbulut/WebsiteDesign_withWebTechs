const onepieceBtn = document.getElementById("onepiece-open");
const onepiece = document.querySelector(".onepiece-modal");
const onepieceClose = document.getElementById("onepiece-close");

onepieceBtn.addEventListener("click", () => {
    onepiece.style.display = "flex";
})

onepieceClose.addEventListener("click", () => {
    onepiece.style.display = "none";
})
