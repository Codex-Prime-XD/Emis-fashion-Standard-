/* ================= CART ================= */
function addToCart(id){
  const existing = cart.find(c => c.id === id);
  if(existing){ existing.qty += 1; } else { cart.push({id, qty:1}); }
  saveCart();
  openCart();
}
function changeQty(id, delta){
  const item = cart.find(c => c.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){ cart = cart.filter(c => c.id !== id); }
  saveCart();
}
function removeFromCart(id){
  cart = cart.filter(c => c.id !== id);
  saveCart();
}
function updateCartUI(){
  const count = cart.reduce((s,c)=>s+c.qty,0);
  document.getElementById("cart-count").textContent = count;
  const itemsBox = document.getElementById("cart-items");
  if(cart.length === 0){
    itemsBox.innerHTML = `<div class="cart-empty">Votre panier est vide</div>`;
  } else {
    itemsBox.innerHTML = cart.map(c => {
      const p = PRODUCTS.find(x => x.id === c.id);
      if(!p) return "";
      return `<div class="cart-item">
        <img src="${IMAGES[p.img]}" alt="${p.name}">
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">${formatPrice(p.price)}</div>
          <div class="qty-row">
            <button onclick="changeQty('${c.id}',-1)">-</button>
            <span>${c.qty}</span>
            <button onclick="changeQty('${c.id}',1)">+</button>
          </div>
          <button class="ci-remove" onclick="removeFromCart('${c.id}')">Retirer</button>
        </div>
      </div>`;
    }).join("");
  }
  const total = cart.reduce((s,c)=>{ const p = PRODUCTS.find(x=>x.id===c.id); return s + (p? p.price*c.qty : 0); },0);
  document.getElementById("cart-total").textContent = formatPrice(total);
}
function openCart(){ document.getElementById("cart-drawer").classList.add("show"); document.getElementById("cart-overlay").classList.add("show"); }
function closeCart(){ document.getElementById("cart-drawer").classList.remove("show"); document.getElementById("cart-overlay").classList.remove("show"); }
function checkout(){
  if(cart.length === 0) return;
  if(!currentUser){ closeCart(); openAuth(); return; }
  alert("Merci " + currentUser.name + " ! Votre commande a bien été enregistrée.");
  cart = []; saveCart(); closeCart();
}
