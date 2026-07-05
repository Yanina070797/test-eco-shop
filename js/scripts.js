// New Arrival slider for desktop
const arrivalItem = document.querySelectorAll(".arrival-item");
const aheadButton = document.querySelector(".ahead-button");
const backButton = document.querySelector(".back-button");
const aheadButtonSVG = document.querySelector(".ahead-button-svg");
const backButtonSVG = document.querySelector(".back-button-svg");

aheadButton.addEventListener("click", () => {
  arrivalItem.forEach((card, index) => {
    if (index < 4) {
      card.classList.add("is-hidden");
    } else {
      card.classList.remove("is-hidden");
    }
  });
  aheadButton.classList.remove("is-active");
  backButton.classList.add("is-active");

  aheadButtonSVG.classList.remove("is-active-svg");
  backButtonSVG.classList.add("is-active-svg");
});

backButton.addEventListener("click", () => {
  arrivalItem.forEach((card, index) => {
    if (index < 4) {
      card.classList.remove("is-hidden");
    } else {
      card.classList.add("is-hidden");
    }
  });
  backButton.classList.remove("is-active");
  aheadButton.classList.add("is-active");

  backButtonSVG.classList.remove("is-active-svg");
  aheadButtonSVG.classList.add("is-active-svg");
});
