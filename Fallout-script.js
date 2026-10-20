const FalloutBtn = document.getElementById("Fallout-open");
const Fallout = document.querySelector(".Fallout-modal");
const FalloutClose = document.getElementById("Fallout-close");
const FalloutTrailer = document.querySelector("#Youtube-video-player")

FalloutBtn.addEventListener("click", () => {
    Fallout.style.display = "flex";
})

FalloutClose.addEventListener("click", () => {
    Fallout.style.display = "none";
})