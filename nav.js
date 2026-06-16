document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.oc-nav-menu-btn');
  var nav = document.querySelector('.oc-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('oc-nav--open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      nav.classList.remove('oc-nav--open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
