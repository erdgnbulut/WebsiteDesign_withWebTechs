const sololevelingBtn = document.getElementById("sololeveling-open");
const sololeveling = document.querySelector(".sololeveling-modal");
const sololevelingClose = document.getElementById("sololeveling-close");

sololevelingBtn.addEventListener("click", () => {
    sololeveling.style.display = "flex";
})

sololevelingClose.addEventListener("click", () => {
    sololeveling.style.display = "none";
})