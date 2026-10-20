const InfinityWarBtn = document.getElementById("InfinityWar-open");
const InfinityWar = document.querySelector(".InfinityWar-modal");
const InfinityWarClose = document.getElementById("InfinityWar-close");

InfinityWarBtn.addEventListener("click", () => {
    InfinityWar.style.display = "flex";
})

InfinityWarClose.addEventListener("click", () => {
    InfinityWar.style.display = "none";
})