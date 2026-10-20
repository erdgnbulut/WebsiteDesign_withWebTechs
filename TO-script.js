const TOBtn = document.getElementById("TO-open");
const TO = document.querySelector(".TO-modal");
const TOClose = document.getElementById("TO-close");

TOBtn.addEventListener("click", () => {
    TO.style.display = "flex";
})

TOClose.addEventListener("click", () => {
    TO.style.display = "none";
})