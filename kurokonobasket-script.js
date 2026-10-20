const kurokonobasketBtn = document.getElementById("kurokonobasket-open");
const kurokonobasket = document.querySelector(".kurokonobasket-modal");
const kurokonobasketClose = document.getElementById("kurokonobasket-close");

kurokonobasketBtn.addEventListener("click", () => {
    kurokonobasket.style.display = "flex";
})

kurokonobasketClose.addEventListener("click", () => {
    kurokonobasket.style.display = "none";
})