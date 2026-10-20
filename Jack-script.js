const JackBtn = document.getElementById("Jack-open");
const Jack = document.querySelector(".Jack-modal");
const JackClose = document.getElementById("Jack-close");

JackBtn.addEventListener("click", () => {
    Jack.style.display = "flex";
})

JackClose.addEventListener("click", () => {
    Jack.style.display = "none";
})