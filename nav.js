document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.oc-nav-menu-btn');
  var nav = document.querySelector('.oc-nav');

  if (document.body && document.body.id === 'home') {
    var closeSection = document.querySelector('.oc-close');
    if (closeSection && closeSection.closest('.oc-section')) {
      closeSection.closest('.oc-section').classList.add('oc-section--promise');
    }

    var managementTitle = Array.prototype.slice.call(document.querySelectorAll('.oc-tool-listing-name')).find(function (el) {
      return el.textContent.trim() === 'Ongoing Management';
    });
    var managementCard = managementTitle && managementTitle.closest('.oc-tool-listing');
    if (managementCard) {
      managementCard.classList.add('oc-tool-listing--management');
      var tag = managementCard.querySelector('.oc-tool-listing-tag');
      if (tag) tag.remove();
    }
  }

  if (document.body && document.body.id === 'home' && !document.getElementById('oc-home-polish-style')) {
    var style = document.createElement('style');
    style.id = 'oc-home-polish-style';
    style.textContent = [
      '#home .oc-close-actions { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--oc-sp-3); }',
      '#home .oc-close-actions .oc-btn { min-width: min(100%, 360px); padding: 16px 28px; font-size: var(--oc-text-13); font-weight: 700; letter-spacing: 0.18em; text-align: center; border-color: var(--oc-vertical-accent); background: linear-gradient(180deg, #d1a840 0%, var(--oc-vertical-accent) 100%); color: var(--oc-text-primary); box-shadow: 0 14px 30px rgba(41, 38, 30, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.35); animation: oc-close-cta-presence 3.8s ease-in-out infinite; }',
      '#home .oc-close-actions .oc-btn:hover { opacity: 1; transform: translateY(-2px); border-color: var(--oc-vertical-accent-deep); background: linear-gradient(180deg, #ddb54d 0%, #c89d2e 100%); animation-play-state: paused; box-shadow: 0 18px 38px rgba(41, 38, 30, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4); }',
      '@keyframes oc-close-cta-presence { 0%, 100% { box-shadow: 0 14px 30px rgba(41, 38, 30, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.35); } 50% { box-shadow: 0 18px 40px rgba(184, 146, 42, 0.24), 0 6px 18px rgba(41, 38, 30, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.42); } }',
      '#home .oc-hero, #home .oc-vertical-section, #home #how-it-works, #home .oc-band, #home .oc-section--promise { position: relative; }',
      '#home .oc-hero-eyebrow, #home .oc-vertical-section > .oc-vertical-header .oc-vertical-indicator, #home #how-it-works .oc-section-head .oc-vertical-indicator, #home .oc-why-eyebrow, #home .oc-close-eyebrow { position: absolute; top: var(--oc-sp-5); left: var(--oc-page-padding-x); margin: 0; z-index: 3; justify-content: flex-start; text-align: left; }',
      '#home .oc-hero { padding-top: calc(var(--oc-sp-9) + var(--oc-sp-5)); }',
      '#home .oc-vertical-section, #home #how-it-works, #home .oc-band, #home .oc-section--promise { padding-top: calc(var(--oc-sp-9) + var(--oc-sp-2)); }',
      '#home .oc-vertical-section > .oc-vertical-header .oc-vertical-indicator, #home #how-it-works .oc-section-head .oc-vertical-indicator { margin-bottom: 0; }',
      '#home .oc-vertical-section > .oc-vertical-header { justify-content: center; text-align: center; }',
      '#home .oc-vertical-section > .oc-vertical-header .oc-vertical-meta { max-width: 760px; }',
      '#home .oc-vertical-section > .oc-vertical-header .oc-vertical-desc { margin-left: auto; margin-right: auto; }',
      '#home .oc-tool-listing--management { position: relative; border-color: rgba(138, 104, 26, 0.56); background: linear-gradient(90deg, rgba(184, 146, 42, 0.13), transparent 32%), linear-gradient(180deg, rgba(255, 248, 226, 0.78), var(--oc-surface-page)); box-shadow: 6px 6px 0 rgba(138, 104, 26, 0.14), 0 18px 38px rgba(41, 38, 30, 0.08); overflow: hidden; }',
      '#home .oc-tool-listing--management::before { content: ""; position: absolute; inset: 0 auto 0 0; width: 8px; background: var(--oc-vertical-accent); }',
      '#home .oc-tool-listing--management::after { content: ""; position: absolute; top: 30px; right: 34px; width: 84px; height: 84px; border: var(--oc-border-subordinate) solid rgba(138, 104, 26, 0.34); border-radius: 50%; background: conic-gradient(from 18deg, rgba(138, 104, 26, 0.78) 0deg, rgba(184, 146, 42, 0.58) 82deg, rgba(184, 146, 42, 0.38) 168deg, rgba(138, 104, 26, 0.26) 260deg, rgba(138, 104, 26, 0.78) 360deg); -webkit-mask: radial-gradient(circle, transparent 0 28px, #000 29px 42px, transparent 43px); mask: radial-gradient(circle, transparent 0 28px, #000 29px 42px, transparent 43px); opacity: 0.86; pointer-events: none; animation: oc-management-loop 0.68s linear infinite; }',
      '@keyframes oc-management-loop { to { transform: rotate(360deg); } }',
      '#home .oc-tool-listing--management .oc-tool-listing-header { position: relative; z-index: 1; padding: clamp(24px, 3.4vw, 40px); padding-right: clamp(28px, 12vw, 180px); }',
      '#home .oc-tool-listing--management .oc-tool-listing-name { font-size: clamp(28px, 3vw, 40px); line-height: 1.05; letter-spacing: -0.01em; margin-bottom: var(--oc-sp-3); }',
      '#home .oc-tool-listing--management .oc-tool-listing-desc { max-width: 64ch; font-size: clamp(17px, 1.6vw, 20px); line-height: 1.55; color: var(--oc-text-primary); }',
      '#home .oc-tool-listing--management .oc-benefit--wide { max-width: 860px; margin-top: var(--oc-sp-6); padding-top: var(--oc-sp-5); border-top: var(--oc-border-subordinate) solid rgba(138, 104, 26, 0.26); }',
      '#home .oc-tool-listing--management .oc-benefit-label { color: var(--oc-vertical-accent-deep); font-weight: 500; }',
      '#home .oc-tool-listing--management .oc-benefit-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--oc-sp-4); }',
      '#home .oc-tool-listing--management .oc-benefit-list li { padding: var(--oc-sp-4) var(--oc-sp-4) var(--oc-sp-4) var(--oc-sp-5); border: var(--oc-border-subordinate) solid rgba(138, 104, 26, 0.22); background: rgba(255, 255, 255, 0.86); color: var(--oc-text-primary); }',
      '#home .oc-tool-listing--management .oc-benefit-list li::before { left: var(--oc-sp-3); top: calc(var(--oc-sp-4) + 0.48em); background: var(--oc-text-primary); }',
      '@media (max-width: 900px) { #home .oc-tool-listing--management .oc-benefit-list { grid-template-columns: 1fr; } }',
      '@media (max-width: 767px) { #home .oc-close-actions .oc-btn { min-width: 100%; padding-left: 18px; padding-right: 18px; } #home .oc-hero-eyebrow, #home .oc-vertical-section > .oc-vertical-header .oc-vertical-indicator, #home #how-it-works .oc-section-head .oc-vertical-indicator, #home .oc-why-eyebrow, #home .oc-close-eyebrow { top: var(--oc-sp-4); left: var(--oc-page-padding-x-mob); max-width: calc(100% - (var(--oc-page-padding-x-mob) * 2)); } #home .oc-hero { padding-top: calc(var(--oc-sp-7) + var(--oc-sp-6)); } #home .oc-vertical-section, #home #how-it-works, #home .oc-band, #home .oc-section--promise { padding-top: calc(var(--oc-sp-8) + var(--oc-sp-4)); } #home .oc-tool-listing--management::after { top: 22px; right: 22px; width: 56px; height: 56px; -webkit-mask: radial-gradient(circle, transparent 0 18px, #000 19px 28px, transparent 29px); mask: radial-gradient(circle, transparent 0 18px, #000 19px 28px, transparent 29px); } #home .oc-tool-listing--management .oc-tool-listing-header { padding-right: var(--oc-sp-5); } }',
      '@media (prefers-reduced-motion: reduce) { #home .oc-close-actions .oc-btn, #home .oc-tool-listing--management::after { animation: none; } }'
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
