const BlacklistBtn = document.getElementById("Blacklist-open");
const Blacklist = document.querySelector(".Blacklist-modal");
const BlacklistClose = document.getElementById("Blacklist-close");

BlacklistBtn.addEventListener("click", () => {
    Blacklist.style.display = "flex";
})

BlacklistClose.addEventListener("click", () => {
    Blacklist.style.display = "none";
})