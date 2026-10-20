const SpiderVerseBtn = document.getElementById("SpiderVerse-open");
const SpiderVerse = document.querySelector(".SpiderVerse-modal");
const SpiderVerseClose = document.getElementById("SpiderVerse-close");

SpiderVerseBtn.addEventListener("click", () => {
    SpiderVerse.style.display = "flex";
})

SpiderVerseClose.addEventListener("click", () => {
    SpiderVerse.style.display = "none";
})