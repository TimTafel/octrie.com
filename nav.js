document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.oc-nav-menu-btn');
  var nav = document.querySelector('.oc-nav');

  if (document.body && document.body.id === 'home' && !document.getElementById('oc-close-cta-style')) {
    var style = document.createElement('style');
    style.id = 'oc-close-cta-style';
    style.textContent = [
      '#home .oc-close-actions { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--oc-sp-3); }',
      '#home .oc-close-actions .oc-btn { min-width: min(100%, 360px); padding: 16px 28px; font-size: var(--oc-text-13); font-weight: 700; letter-spacing: 0.18em; text-align: center; border-color: var(--oc-vertical-accent); background: linear-gradient(180deg, #d1a840 0%, var(--oc-vertical-accent) 100%); color: var(--oc-text-primary); box-shadow: 0 14px 30px rgba(41, 38, 30, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.35); animation: oc-close-cta-presence 3.8s ease-in-out infinite; }',
      '#home .oc-close-actions .oc-btn:hover { opacity: 1; transform: translateY(-2px); border-color: var(--oc-vertical-accent-deep); background: linear-gradient(180deg, #ddb54d 0%, #c89d2e 100%); animation-play-state: paused; box-shadow: 0 18px 38px rgba(41, 38, 30, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4); }',
      '@keyframes oc-close-cta-presence { 0%, 100% { box-shadow: 0 14px 30px rgba(41, 38, 30, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.35); } 50% { box-shadow: 0 18px 40px rgba(184, 146, 42, 0.24), 0 6px 18px rgba(41, 38, 30, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.42); } }',
      '@media (max-width: 767px) { #home .oc-close-actions .oc-btn { min-width: 100%; padding-left: 18px; padding-right: 18px; } }',
      '@media (prefers-reduced-motion: reduce) { #home .oc-close-actions .oc-btn { animation: none; } }'
    ].join('\n');
    document.head.appendChild(style);
  }

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
