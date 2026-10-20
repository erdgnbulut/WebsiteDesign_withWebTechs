const vinlandsagaBtn = document.getElementById("vinlandsaga-open");
const vinlandsaga = document.querySelector(".vinlandsaga-modal");
const vinlandsagaClose = document.getElementById("vinlandsaga-close");

vinlandsagaBtn.addEventListener("click", () => {
    vinlandsaga.style.display = "flex";
})

vinlandsagaClose.addEventListener("click", () => {
    vinlandsaga.style.display = "none";
})