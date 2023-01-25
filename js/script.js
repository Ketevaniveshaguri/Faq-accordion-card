const answer = document.querySelectorAll(".answer");

document.querySelectorAll(".question").forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("open");
    item.nextElementSibling.classList.toggle("open");
    question.style.fontWeight = "700";
    iconArrow.style.transform = "rotate(180deg)";
  });
});
