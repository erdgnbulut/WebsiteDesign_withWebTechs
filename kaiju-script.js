const kaijuBtn = document.getElementById("kaiju-open");
const kaiju = document.querySelector(".kaiju-modal");
const kaijuClose = document.getElementById("kaiju-close");

kaijuBtn.addEventListener("click", () => {
    kaiju.style.display = "flex";
})

kaijuClose.addEventListener("click", () => {
    kaiju.style.display = "none";
})