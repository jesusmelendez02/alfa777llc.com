// nav

const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelectorAll(".primary-nav a"); // All links in the nav

navToggle.addEventListener("click", () => {
  const isVisible = nav.getAttribute("data-visible") === "true";

  // Toggle menu visibility and aria-expanded attribute based on current state
  nav.setAttribute("data-visible", !isVisible);
  navToggle.setAttribute("aria-expanded", !isVisible);

  // Add or remove no-scroll class on body to prevent/allow scrolling based on visibility
  document.body.classList.toggle("no-scroll", !isVisible);
});

// Close menu when a navigation link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll"); // Allow scrolling again
  });
});
