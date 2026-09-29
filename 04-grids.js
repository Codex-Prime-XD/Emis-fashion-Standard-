/* ================= GRIDS ================= */
function renderGrid(containerId, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  if(list.length === 0){
    el.innerHTML = `<div class="empty-state">Collection à venir prochainement</div>`;
    return;
  }
  el.innerHTML = list.map(p => `
    <div class="product-card">
      <div class="img-wrap" onclick="openModal('${p.id}')">
        <img src="${IMAGES[p.img]}" alt="${p.name}" loading="lazy">
        <button class="add-cart-btn" onclick="event.stopPropagation();addToCart('${p.id}')">Ajouter au panier</button>
      </div>
      <div class="info" onclick="openModal('${p.id}')">
        <div class="name">${p.name}</div>
        <div class="price-row"><span class="price">${formatPrice(p.price)}</span></div>
      </div>
    </div>
  `).join("");
}

function renderAllGrids(){
  renderGrid("grid-femme", PRODUCTS.filter(p=>p.cat==="femme"));
  renderGrid("grid-homme", PRODUCTS.filter(p=>p.cat==="homme"));
  renderGrid("grid-enfant", []);
  renderGrid("grid-chaussures", []);
  renderGrid("grid-sacs", []);
  renderGrid("grid-accessoires", []);
  renderGrid("grid-new", PRODUCTS.slice(0,8));
  renderGrid("grid-best", ["f2","h2","f5","h6","f7","h4"].map(id=>PRODUCTS.find(p=>p.id===id)));
}
