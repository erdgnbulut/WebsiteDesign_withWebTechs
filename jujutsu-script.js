const jujutsuBtn = document.getElementById("jujutsu-open");
const jujutsu = document.querySelector(".jujutsu-modal");
const jujutsuClose = document.getElementById("jujutsu-close");

jujutsuBtn.addEventListener("click", () => {
    jujutsu.style.display = "flex";
})

jujutsuClose.addEventListener("click", () => {
    jujutsu.style.display = "none";
})
