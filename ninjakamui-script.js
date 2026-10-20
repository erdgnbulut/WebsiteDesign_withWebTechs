const ninjakamuiBtn = document.getElementById("ninjakamui-open");
const ninjakamui = document.querySelector(".ninjakamui-modal");
const ninjakamuiClose = document.getElementById("ninjakamui-close");

ninjakamuiBtn.addEventListener("click", () => {
    ninjakamui.style.display = "flex";
})

ninjakamuiClose.addEventListener("click", () => {
    ninjakamui.style.display = "none";
})