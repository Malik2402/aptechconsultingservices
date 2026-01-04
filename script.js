/* ================= MOBILE NAV (guarded) ================= */
try {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
} catch (e) {
  console.warn('Mobile nav script skipped:', e);
}

/* ================= demo() for local page ================= */
window.demo = function demo() {
  console.log('demo() called');
  alert('demo() ran — check the console for details.');
};

/* ================= VIDEO-BASED ANIMATIONS ================= */
/* Intersection Observer and scroll animations can be added here */
