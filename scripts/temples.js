// Footer: year and last modified
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger menu
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  const isOpen = nav.classList.contains("open");
  menuButton.textContent = isOpen ? "✕" : "☰";
  menuButton.setAttribute("aria-expanded", isOpen);
});