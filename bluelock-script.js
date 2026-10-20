const bluelockBtn = document.getElementById("bluelock-open");
const bluelock = document.querySelector(".bluelock-modal");
const bluelockClose = document.getElementById("bluelock-close");

bluelockBtn.addEventListener("click", () => {
    bluelock.style.display = "flex";
})

bluelockClose.addEventListener("click", () => {
    bluelock.style.display = "none";
})