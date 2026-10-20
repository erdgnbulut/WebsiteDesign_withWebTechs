const X97Btn = document.getElementById("X97-open");
const X97 = document.querySelector(".X97-modal");
const X97Close = document.getElementById("X97-close");

X97Btn.addEventListener("click", () => {
    X97.style.display = "flex";
})

X97Close.addEventListener("click", () => {
    X97.style.display = "none";
})