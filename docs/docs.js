const hamburgerBtn = document.querySelector(".hamburger");
const sidebarNav = document.querySelector(".sidebar");

hamburgerBtn.addEventListener("click", () => {
  const visibility = sidebarNav.getAttribute("data-visible");
  if (visibility === "false") {
    sidebarNav.setAttribute("data-visible", true);
    hamburgerBtn.classList.toggle("is-active");
  } else if (visibility === "true") {
    sidebarNav.setAttribute("data-visible", false);
    hamburgerBtn.classList.toggle("is-active");
  }
});
