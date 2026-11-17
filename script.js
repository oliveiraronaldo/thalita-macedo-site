(function () {
  // Intro: mostra a marca e depois revela o hero
  var body = document.body;
  var start = Date.now();
  var MIN_INTRO = 1800; // ms mínimos de abertura
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var done = false;
  function finishIntro() {
    if (done) return; done = true;
    body.classList.add('intro-out');
    body.classList.remove('is-loading');
    setTimeout(function () { body.classList.add('is-ready'); }, reduced ? 0 : 450);
    setTimeout(function () { var i = document.getElementById('intro'); if (i) i.remove(); }, 1600);
  }
  if (reduced) { finishIntro(); }
  else {
    window.addEventListener('load', function () {
      setTimeout(finishIntro, Math.max(0, MIN_INTRO - (Date.now() - start)));
    });
    setTimeout(finishIntro, 4500); // segurança caso algo demore a carregar
  }

  // Header ao rolar
  var header = document.querySelector('.header');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 20); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Animações ao aparecer
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // FAQ: abre um por vez
  var details = document.querySelectorAll('.faq details');
  details.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) details.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  document.getElementById('ano').textContent = new Date().getFullYear();
})();
