// nav.js — desktop navbar behaviour (shared by all inner pages)
(function () {
  var wrap = document.querySelector('.nav2-wrap');
  if (!wrap) return;

  // Slim the bar and hide the utility strip once the page is scrolled
  function onScroll() { wrap.classList.toggle('is-scrolled', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Dropdown toggles that only open a menu shouldn't jump to the top of the page
  wrap.querySelectorAll('.nav2-dd > .nav2-link[href="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });
})();
