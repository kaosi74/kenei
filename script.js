const btn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("hidden");
});
