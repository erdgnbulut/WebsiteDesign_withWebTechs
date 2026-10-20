const hxhBtn = document.getElementById("hxh-open");
const hxh = document.querySelector(".hxh-modal");
const hxhClose = document.getElementById("hxh-close");

hxhBtn.addEventListener("click", () => {
    hxh.style.display = "flex";
})

hxhClose.addEventListener("click", () => {
    hxh.style.display = "none";
})
