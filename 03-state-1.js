/* ================= STATE ================= */
let cart = JSON.parse(sessionStorage.getItem("emi_cart") || "[]");
let currentUser = null;

function saveCart(){ sessionStorage.setItem("emi_cart", JSON.stringify(cart)); updateCartUI(); }

function formatPrice(p){ return p + " $"; }
