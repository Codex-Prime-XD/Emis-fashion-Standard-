/* ================= ROUTER ================= */
function showPage(page){
  document.querySelectorAll(".page-view").forEach(v => v.classList.remove("show"));
  const target = document.getElementById("page-" + page);
  if(target) target.classList.add("show");
  document.querySelectorAll("[data-page]").forEach(a => a.classList.toggle("active", a.dataset.page === page));
  window.scrollTo(0,0);
  window.location.hash = page;
  closeBurger();
  document.getElementById("global-search").style.display = "none";
}
