/* ================= SEARCH ================= */
function initSearch(){
  const input = document.getElementById("search-input");
  const resBox = document.getElementById("search-results");
  const toggle = document.getElementById("search-toggle");
  const box = document.getElementById("global-search");

  toggle.addEventListener("click", ()=>{
    box.style.display = box.style.display === "none" ? "block" : "none";
    if(box.style.display === "block") input.focus();
  });

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if(q.length === 0){ resBox.classList.remove("show"); resBox.innerHTML=""; return; }
    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)).slice(0,8);
    resBox.innerHTML = matches.length
      ? matches.map(p => `
          <div class="sr-item" onclick="document.getElementById('search-results').classList.remove('show'); openModal('${p.id}')">
            <img src="${IMAGES[p.img]}" alt="${p.name}">
            <div><div class="sr-name">${p.name}</div><div class="sr-price">${formatPrice(p.price)}</div></div>
          </div>`).join("")
      : `<div class="sr-empty">Aucun résultat pour « ${q} »</div>`;
    resBox.classList.add("show");
  });
}
