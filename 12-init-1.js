/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  renderAllGrids();
  initSearch();
  initRotators();

  document.querySelectorAll("[data-page]").forEach(a=>{
    a.addEventListener("click", (e)=>{ e.preventDefault(); showPage(a.dataset.page); });
  });

  document.getElementById("cart-btn").addEventListener("click", openCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document.getElementById("account-btn").addEventListener("click", openAuth);
  document.getElementById("auth-modal").addEventListener("click", (e)=>{ if(e.target.id==="auth-modal") closeAuth(); });
  document.getElementById("product-modal").addEventListener("click", (e)=>{ if(e.target.id==="product-modal") closeModal(); });
  document.getElementById("burger-btn").addEventListener("click", openBurger);
  document.getElementById("burger-close").addEventListener("click", closeBurger);
  document.getElementById("burger-overlay").addEventListener("click", closeBurger);

  document.querySelectorAll(".lang-switch button").forEach(b=>{
    b.addEventListener("click", ()=>{
      document.querySelectorAll(".lang-switch button").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
    });
  });

  updateCartUI();
  const initial = window.location.hash ? window.location.hash.replace("#","") : "home";
  showPage(initial);
});
