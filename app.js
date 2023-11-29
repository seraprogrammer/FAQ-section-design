const faqBtn = document.querySelectorAll(".faq");

faqBtn.forEach((faqBtn) => {

const clickbtn = faqBtn.querySelector(".btn");
const hidepragraph = faqBtn.querySelector(".hidden");
const closeBtn = faqBtn.querySelector(".close-btn"); // Updated variable name

clickbtn.addEventListener("click", function () {
    hidepragraph.style.display = "block";
    clickbtn.style.display = "none";
        closeBtn.style.display = "block";
        faqBtn.style.backgroundColor = "#EEF4FF";

});

closeBtn.addEventListener("click", function () {
    hidepragraph.style.display = "none";
        closeBtn.style.display = "none";
        clickbtn.style.display = "block";
        faqBtn.style.backgroundColor = "#fff";

});
});

