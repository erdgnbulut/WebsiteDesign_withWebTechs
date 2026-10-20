const narutoBtn = document.getElementById("naruto-open");
const naruto = document.querySelector(".naruto-modal");
const narutoClose = document.getElementById("naruto-close");

narutoBtn.addEventListener("click", () => {
    naruto.style.display = "flex";
})

narutoClose.addEventListener("click", () => {
    naruto.style.display = "none";
})
