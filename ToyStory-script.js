const ToyStoryBtn = document.getElementById("ToyStory-open");
const ToyStory = document.querySelector(".ToyStory-modal");
const ToyStoryClose = document.getElementById("ToyStory-close");

ToyStoryBtn.addEventListener("click", () => {
    ToyStory.style.display = "flex";
})

ToyStoryClose.addEventListener("click", () => {
    ToyStory.style.display = "none";
})