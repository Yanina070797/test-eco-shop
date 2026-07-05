// New Arrival slider for desktop
const arrivalItem = document.querySelectorAll(".arrival-item");
const aheadButton = document.querySelector(".ahead-button");
const backButton = document.querySelector(".back-button");

aheadButton.addEventListener("click", () => {
  arrivalItem.forEach((card, index) => {
    if (index < 4) {
      card.classList.add("is-hidden");
    } else {
      card.classList.remove("is-hidden");
    }
  });
});

backButton.addEventListener("click", () => {
  arrivalItem.forEach((card, index) => {
    if (index < 4) {
      card.classList.remove("is-hidden");
    } else {
      card.classList.add("is-hidden");
    }
  });
});
