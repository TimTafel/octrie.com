document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.oc-nav-menu-btn');
  var nav = document.querySelector('.oc-nav');
  if (btn && nav) {
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
  }

  // Assemble phone links at runtime so the raw number never sits in the
  // static HTML for scrapers to harvest. Elements start as a mailto
  // fallback with placeholder text; this fills in the real tel: link and
  // formatted number once the page has loaded.
  document.querySelectorAll('[data-tel]').forEach(function (el) {
    var digits = el.getAttribute('data-tel').split('').reverse().join('');
    var formatted = '(' + digits.slice(0, 3) + ') ' + digits.slice(3, 6) + '-' + digits.slice(6);
    el.href = 'tel:+1' + digits;
    el.textContent = (el.getAttribute('data-tel-label') || '') + formatted;
  });
});
