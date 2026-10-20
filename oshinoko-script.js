const oshinokoBtn = document.getElementById("oshinoko-open");
const oshinoko = document.querySelector(".oshinoko-modal");
const oshinokoClose = document.getElementById("oshinoko-close");

oshinokoBtn.addEventListener("click", () => {
    oshinoko.style.display = "flex";
})

oshinokoClose.addEventListener("click", () => {
    oshinoko.style.display = "none";
})