const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });
  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

const publications = document.querySelectorAll(".publication-placeholder");
publications.forEach((publication, index) => {
  const number = publication.querySelector(":scope > span");
  if (number) {
    number.textContent = String(publications.length - index).padStart(2, "0");
  }
});
