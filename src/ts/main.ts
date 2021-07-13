const toggleBtn = document.getElementById("toggle-btn");
const header = document.getElementById("header");
const navList = document.getElementById("nav-list");

toggleBtn.onclick = () => {
  header.classList.toggle("open");
};

navList.onclick = () => {
  header.classList.remove("open");
};
