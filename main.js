// main.js — small, optional utility.
// Marks the current page's link in the top nav as active, so you don't
// have to hand-edit aria-current on every page when you add new ones.
// Safe to delete this whole file (and its <script> tag) if you'd rather
// hardcode aria-current="page" by hand — each HTML file already does
// that too, so nothing breaks without this script.

document.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".topnav__links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
});
