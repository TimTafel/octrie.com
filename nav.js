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

    var missedTitle = Array.prototype.slice.call(document.querySelectorAll('.oc-tool-listing-name')).find(function (el) {
      return el.textContent.trim() === 'Missed Call Capture';
    });
    var missedCard = missedTitle && missedTitle.closest('.oc-tool-listing');
    var missedDemo = missedCard && missedCard.querySelector('.oc-tool-listing-box .oc-demo');
    if (missedDemo) {
      missedDemo.className = 'oc-demo oc-demo--missed-call';
      missedDemo.setAttribute('aria-hidden', 'true');
      missedDemo.innerHTML = [
        '<div class="oc-demo-phase oc-demo-phase--lost">',
        '  <div class="oc-demo-label">Before</div>',
        '  <div class="oc-demo-before-window">',
        '    <div class="oc-demo-before-pan">',
        '      <div class="oc-demo-flow">',
        '        <div class="oc-demo-flow-step"><span class="oc-demo-flow-dot" aria-hidden="true"></span><span>Incoming call</span></div>',
        '        <div class="oc-demo-flow-step"><span class="oc-demo-flow-dot" aria-hidden="true"></span><span>Hits voicemail</span></div>',
        '        <div class="oc-demo-flow-step oc-demo-flow-step--cold"><span class="oc-demo-flow-dot" aria-hidden="true"></span><span>Missed call</span></div>',
        '      </div>',
        '      <div class="oc-missed-stack">',
        '        <div class="oc-missed-stack-title">Missed calls</div>',
        '        <div class="oc-missed-row">Yesterday · 4 missed</div>',
        '        <div class="oc-missed-row">Today · 3 missed</div>',
        '        <div class="oc-missed-row">This week · 12 missed</div>',
        '      </div>',
        '    </div>',
        '  </div>',
        '</div>',
        '<div class="oc-demo-phase oc-demo-phase--caught">',
        '  <div class="oc-demo-label">After</div>',
        '  <div class="oc-demo-line">8:03 AM · Missed call</div>',
        '  <div class="oc-demo-bubble">Sorry we missed you — what do you need done?</div>',
        '  <div class="oc-demo-bubble oc-demo-bubble--reply">Do you have anything open tomorrow?</div>',
        '  <div class="oc-demo-line oc-demo-line--result">Reply received · lead saved</div>',
        '</div>'
      ].join('');
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
      '#home .oc-tool-listing--management .oc-benefit-list li { padding: var(--oc-sp-4); border: var(--oc-border-subordinate) solid rgba(138, 104, 26, 0.22); background: rgba(255, 255, 255, 0.86); color: var(--oc-text-primary); }',
      '#home .oc-tool-listing--management .oc-benefit-list li::before { display: none; }',
      '#home .oc-demo--missed-call { position: relative; display: block; overflow: hidden; }',
      '#home .oc-demo--missed-call .oc-demo-phase { justify-content: flex-start; }',
      '#home .oc-demo-phase--lost { opacity: 1; gap: var(--oc-sp-3); animation: oc-missed-lost 11.8s ease-in-out infinite; }',
      '#home .oc-demo-phase--caught { opacity: 0; justify-content: space-between; animation: oc-missed-caught 11.8s ease-in-out infinite; }',
      '#home .oc-demo-label { font-family: var(--oc-font-mono); font-size: clamp(18px, 2vw, 24px); font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--oc-text-primary); text-align: center; align-self: center; }',
      '#home .oc-demo-before-window { position: relative; flex: 1; width: 100%; min-height: 0; overflow: hidden; }',
      '#home .oc-demo-before-pan { display: flex; flex-direction: column; gap: 128px; width: 100%; height: 100%; animation: oc-before-camera-pan 11.8s ease-in-out infinite; }',
      '#home .oc-demo-flow { position: relative; display: flex; flex-direction: column; justify-content: space-between; flex: 0 0 100%; gap: var(--oc-sp-3); height: 100%; width: 100%; padding: var(--oc-sp-3) 0 0 38px; }',
      '#home .oc-demo-flow::before { content: ""; position: absolute; left: 11px; top: calc(var(--oc-sp-3) + 39px); bottom: 39px; width: 1px; background: linear-gradient(to bottom, rgba(43, 132, 87, 0.18) 0%, rgba(43, 132, 87, 0.7) 43%, rgba(163, 52, 52, 0.74) 57%, rgba(163, 52, 52, 0.34) 100%); transform: scaleY(0); transform-origin: top; animation: oc-before-flow-line 11.8s ease-in-out infinite; }',
      '#home .oc-demo-flow-step { position: relative; display: flex; align-items: center; justify-content: center; gap: var(--oc-sp-3); min-height: 78px; width: 100%; padding: var(--oc-sp-4); border: var(--oc-border-subordinate) solid rgba(184, 146, 42, 0.34); background: rgba(255, 255, 255, 0.82); box-shadow: 3px 3px 0 rgba(26, 26, 26, 0.055); font-family: var(--oc-font-mono); font-size: clamp(14px, 1.35vw, 17px); font-weight: 700; letter-spacing: 0.08em; line-height: 1.35; text-transform: uppercase; text-align: center; color: var(--oc-text-primary); opacity: 0; transform: translateY(10px); animation: oc-before-flow-step 11.8s ease-in-out infinite; }',
      '#home .oc-demo-flow-step:nth-child(1) { border-color: rgba(43, 132, 87, 0.32); background: rgba(239, 250, 244, 0.9); color: #236b47; animation-name: oc-before-flow-step-one; }',
      '#home .oc-demo-flow-step:nth-child(1) .oc-demo-flow-dot { background: #2b8457; box-shadow: 0 0 0 5px rgba(43, 132, 87, 0.1); }',
      '#home .oc-demo-flow-step:nth-child(2) { animation-name: oc-before-flow-step-two; }',
      '#home .oc-demo-flow-step:nth-child(3) { animation-name: oc-before-flow-step-three; border-color: rgba(163, 52, 52, 0.48); background: rgba(255, 226, 221, 0.94); color: #782222; }',
      '#home .oc-demo-flow-dot { position: absolute; left: -31px; top: 50%; transform: translateY(-50%); width: 7px; height: 7px; flex: 0 0 auto; background: var(--oc-border-strong); box-shadow: 0 0 0 5px rgba(190, 146, 34, 0.1); }',
      '#home .oc-demo-flow-step:nth-child(2) .oc-demo-flow-dot { width: 13px; height: 13px; left: -34px; background: transparent; box-shadow: none; }',
      '#home .oc-demo-flow-step:nth-child(2) .oc-demo-flow-dot::before, #home .oc-demo-flow-step:nth-child(2) .oc-demo-flow-dot::after { content: ""; position: absolute; left: 50%; top: 50%; width: 14px; height: 3px; background: #a33434; transform-origin: center; }',
      '#home .oc-demo-flow-step:nth-child(2) .oc-demo-flow-dot::before { transform: translate(-50%, -50%) rotate(45deg); }',
      '#home .oc-demo-flow-step:nth-child(2) .oc-demo-flow-dot::after { transform: translate(-50%, -50%) rotate(-45deg); }',
      '#home .oc-demo-flow-step--cold { color: #7c2d2d; }',
      '#home .oc-demo-flow-step--cold .oc-demo-flow-dot { background: #a33434; box-shadow: 0 0 0 5px rgba(163, 52, 52, 0.08); }',
      '#home .oc-missed-stack { flex: 0 0 auto; width: min(100%, 310px); margin-left: auto; margin-right: auto; padding: var(--oc-sp-4); border: var(--oc-border-subordinate) solid rgba(163, 52, 52, 0.38); background: rgba(255, 232, 228, 0.95); box-shadow: 3px 3px 0 rgba(120, 34, 34, 0.08); color: #782222; opacity: 0; transform: translateY(18px); animation: oc-missed-stack-reveal 11.8s ease-in-out infinite; }',
      '#home .oc-missed-stack-title { margin-bottom: var(--oc-sp-3); font-family: var(--oc-font-mono); font-size: clamp(15px, 1.4vw, 18px); font-weight: 700; letter-spacing: 0.1em; line-height: 1.2; text-align: center; text-transform: uppercase; }',
      '#home .oc-missed-row { display: flex; justify-content: center; padding: var(--oc-sp-3) 0; border-top: var(--oc-border-subordinate) solid rgba(163, 52, 52, 0.2); font-family: var(--oc-font-mono); font-size: 12px; font-weight: 700; letter-spacing: 0.09em; line-height: 1.3; text-align: center; text-transform: uppercase; }',
      '@keyframes oc-missed-lost { 0%, 80% { opacity: 1; transform: none; } 88%, 96% { opacity: 0; transform: translateY(-6px); } 100% { opacity: 1; transform: none; } }',
      '@keyframes oc-missed-caught { 0%, 84% { opacity: 0; transform: translateY(8px); } 91%, 96% { opacity: 1; transform: none; } 100% { opacity: 0; transform: translateY(8px); } }',
      '@keyframes oc-before-flow-line { 0%, 8% { opacity: 0; transform: scaleY(0); } 36%, 76% { opacity: 1; transform: scaleY(1); } 84%, 100% { opacity: 0; transform: scaleY(1); } }',
      '@keyframes oc-before-flow-step-one { 0%, 7% { opacity: 0; transform: translateY(10px); } 12%, 70% { opacity: 1; transform: none; } 82%, 100% { opacity: 0; transform: translateY(-5px); } }',
      '@keyframes oc-before-flow-step-two { 0%, 21% { opacity: 0; transform: translateY(10px); } 27%, 70% { opacity: 1; transform: none; } 82%, 100% { opacity: 0; transform: translateY(-5px); } }',
      '@keyframes oc-before-flow-step-three { 0%, 35% { opacity: 0; transform: translateY(10px); } 42%, 76% { opacity: 1; transform: none; } 86%, 100% { opacity: 0; transform: translateY(-5px); } }',
      '@keyframes oc-before-camera-pan { 0%, 46% { transform: translateY(0); } 82%, 100% { transform: translateY(calc(-100% - 128px + 88px)); } }',
      '@keyframes oc-missed-stack-reveal { 0%, 58% { opacity: 0; transform: translateY(18px); } 76%, 86% { opacity: 1; transform: none; } 94%, 100% { opacity: 0; transform: translateY(-6px); } }',
      '@media (max-width: 900px) { #home .oc-tool-listing--management .oc-benefit-list { grid-template-columns: 1fr; } }',
      '@media (max-width: 767px) { #home .oc-close-actions .oc-btn { min-width: 100%; padding-left: 18px; padding-right: 18px; } #home .oc-hero-eyebrow, #home .oc-vertical-section > .oc-vertical-header .oc-vertical-indicator, #home #how-it-works .oc-section-head .oc-vertical-indicator, #home .oc-why-eyebrow, #home .oc-close-eyebrow { top: var(--oc-sp-4); left: var(--oc-page-padding-x-mob); max-width: calc(100% - (var(--oc-page-padding-x-mob) * 2)); } #home .oc-hero { padding-top: calc(var(--oc-sp-7) + var(--oc-sp-6)); } #home .oc-vertical-section, #home #how-it-works, #home .oc-band, #home .oc-section--promise { padding-top: calc(var(--oc-sp-8) + var(--oc-sp-4)); } #home .oc-tool-listing--management::after { top: 22px; right: 22px; width: 56px; height: 56px; -webkit-mask: radial-gradient(circle, transparent 0 18px, #000 19px 28px, transparent 29px); mask: radial-gradient(circle, transparent 0 18px, #000 19px 28px, transparent 29px); } #home .oc-tool-listing--management .oc-tool-listing-header { padding-right: var(--oc-sp-5); } }',
      '@media (prefers-reduced-motion: reduce) { #home .oc-close-actions .oc-btn, #home .oc-tool-listing--management::after, #home .oc-demo-phase--lost, #home .oc-demo-phase--caught, #home .oc-demo-before-pan, #home .oc-demo-flow::before, #home .oc-demo-flow-step, #home .oc-missed-stack { animation: none; } #home .oc-demo-phase--lost { display: none; } #home .oc-demo-phase--caught, #home .oc-demo-flow-step { opacity: 1; transform: none; } }'
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
