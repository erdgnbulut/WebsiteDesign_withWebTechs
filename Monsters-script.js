const MonstersBtn = document.getElementById("Monsters-open");
const Monsters = document.querySelector(".Monsters-modal");
const MonstersClose = document.getElementById("Monsters-close");

MonstersBtn.addEventListener("click", () => {
    Monsters.style.display = "flex";
})

MonstersClose.addEventListener("click", () => {
    Monsters.style.display = "none";
})