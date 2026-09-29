/* ================= ROTATING BACKGROUNDS ================= */
function initRotators(){
  document.querySelectorAll(".rotate-bg, .page-bg-wrap").forEach(wrap=>{
    const layers = wrap.querySelectorAll(".bg-layer");
    if(layers.length < 2) return;
    let idx = 0;
    setInterval(()=>{
      layers[idx].classList.remove("active");
      idx = (idx+1) % layers.length;
      layers[idx].classList.add("active");
    }, 3000);
  });
}
