// NAVBAR MOBILE TOGGLE
const toggleBtn = document.getElementById("toggle-btn");
const header = document.getElementById("header");
const navList = document.getElementById("nav-list");

toggleBtn.onclick = () => {
  header.classList.toggle("open");
};

navList.onclick = () => {
  header.classList.remove("open");
};

// PROJECT CARD TABS
const projectCards = document.querySelectorAll(".project-list .card");
projectCards.forEach((projectCard) => {
  let tabs = projectCard.querySelectorAll(".tabs .tabs__item");

  tabs.forEach((tab: HTMLElement, index) => {
    // Open first tab
    if (index === 0) {
      let targetItem = projectCard.querySelector(`.${tab.dataset.target}`);
      tab.classList.add("open");
      targetItem.classList.add("open");
    }
    tab.addEventListener("click", function () {
      // Open the clicked tab
      let targetItem = projectCard.querySelector(`.${tab.dataset.target}`);
      tab.classList.add("open");
      targetItem.classList.add("open");

      // Close rest of tabs
      tabs.forEach((otherTab: HTMLElement) => {
        if (otherTab !== tab) {
          let targetItem = projectCard.querySelector(
            `.${otherTab.dataset.target}`
          );
          otherTab.classList.remove("open");
          targetItem.classList.remove("open");
        }
      });
    });
  });
  console.log(tabs);
});
