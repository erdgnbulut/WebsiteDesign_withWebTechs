const onepunchmanBtn = document.getElementById("onepunchman-open");
const onepunchman = document.querySelector(".onepunchman-modal");
const onepunchmanClose = document.getElementById("onepunchman-close");

onepunchmanBtn.addEventListener("click", () => {
    onepunchman.style.display = "flex";
})

onepunchmanClose.addEventListener("click", () => {
    onepunchman.style.display = "none";
})
