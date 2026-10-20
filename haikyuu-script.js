const haikyuuBtn = document.getElementById("haikyuu-open");
const haikyuu = document.querySelector(".haikyuu-modal");
const haikyuuClose = document.getElementById("haikyuu-close");

haikyuuBtn.addEventListener("click", () => {
    haikyuu.style.display = "flex";
})

haikyuuClose.addEventListener("click", () => {
    haikyuu.style.display = "none";
})