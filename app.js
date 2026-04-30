// Protect page
checkAuth();

// Navigation
function switchPage(page, el) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");

  document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
}