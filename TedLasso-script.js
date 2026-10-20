const TedLassoBtn = document.getElementById("TedLasso-open");
const TedLasso = document.querySelector(".TedLasso-modal");
const TedLassoClose = document.getElementById("TedLasso-close");

TedLassoBtn.addEventListener("click", () => {
    TedLasso.style.display = "flex";
})

TedLassoClose.addEventListener("click", () => {
    TedLasso.style.display = "none";
})