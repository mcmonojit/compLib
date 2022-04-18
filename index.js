const hamburgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-rightside");

hamburgerBtn.addEventListener("click", () => {
  const visibility = mobileNav.getAttribute("data-visible");
  // this.classList.toggle("is-active");
  if (visibility === "false") {
    mobileNav.setAttribute("data-visible", true);
    hamburgerBtn.classList.toggle("is-active");
  } else if (visibility === "true") {
    mobileNav.setAttribute("data-visible", false);
    hamburgerBtn.classList.toggle("is-active");
  }
});
