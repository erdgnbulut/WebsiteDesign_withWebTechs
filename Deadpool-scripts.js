const DeadpoolBtn = document.getElementById("Deadpool-open");
const Deadpool = document.querySelector(".Deadpool-modal");
const DeadpoolClose = document.getElementById("Deadpool-close");

DeadpoolBtn.addEventListener("click", () => {
    Deadpool.style.display = "flex";
})

DeadpoolClose.addEventListener("click", () => {
    Deadpool.style.display = "none";
})