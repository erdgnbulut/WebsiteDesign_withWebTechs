const LoganBtn = document.getElementById("Logan-open");
const Logan = document.querySelector(".Logan-modal");
const LoganClose = document.getElementById("Logan-close");

LoganBtn.addEventListener("click", () => {
    Logan.style.display = "flex";
})

LoganClose.addEventListener("click", () => {
    Logan.style.display = "none";
})