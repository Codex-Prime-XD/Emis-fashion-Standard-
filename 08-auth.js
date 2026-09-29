/* ================= AUTH ================= */
let authMode = "login";
function openAuth(){ document.getElementById("auth-modal").classList.add("show"); }
function closeAuth(){ document.getElementById("auth-modal").classList.remove("show"); }
function toggleAuthMode(){
  authMode = authMode === "login" ? "signup" : "login";
  document.getElementById("auth-title").textContent = authMode === "login" ? "Se connecter" : "Créer un compte";
  document.getElementById("auth-name").style.display = authMode === "signup" ? "block" : "none";
  document.getElementById("auth-switch-text").textContent = authMode === "login" ? "Pas encore de compte ?" : "Déjà un compte ?";
  document.getElementById("auth-switch-link").textContent = authMode === "login" ? "Créer un compte" : "Se connecter";
}
function submitAuth(){
  const email = document.getElementById("auth-email").value.trim();
  const name = document.getElementById("auth-name").value.trim() || email.split("@")[0];
  if(!email) return;
  currentUser = {name, email};
  closeAuth();
  if(cart.length > 0) checkout();
}
function continueGuest(){
  const email = document.getElementById("auth-email").value.trim();
  currentUser = {name: email ? email.split("@")[0] : "Client", email};
  closeAuth();
  if(cart.length > 0) checkout();
}
