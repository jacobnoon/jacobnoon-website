// jacobnoon.com – Shared Nav & Footer (bilingual DE/EN)
// English is the default at /. German lives at /de/ and its sub-paths (/trainings/, /coaching/, etc.).

(function() {
  const path = window.location.pathname;
  const isEN = path.startsWith('/en/') || path === '/en';

  // Language switcher: map current EN path to DE equivalent and vice versa
  function getOtherLangUrl() {
    if (isEN) {
      // EN → DE
      if (path === '/en/' || path === '/en') return '/de/';
      if (path.startsWith('/en/trainings')) return '/trainings/';
      if (path.startsWith('/en/coaching')) return '/coaching/';
      if (path.startsWith('/en/about')) return '/vita/';
      if (path.startsWith('/en/schnabeltrifftohr/')) {
        // Preserve character sub-path: /en/schnabeltrifftohr/sabrina/ → /schnabeltrifftohr/sabrina/
        return path.replace(/^\/en/, '');
      }
      if (path.startsWith('/en/schnabeltrifftohr')) return '/schnabeltrifftohr/';
      if (path.startsWith('/en/needy-podcast')) return '/needy-podcast/';
      if (path.startsWith('/en/imprint')) return '/impressum/';
      if (path.startsWith('/en/privacy')) return '/datenschutz/';
      if (path.startsWith('/en/terms')) return '/agb/';
      if (path.startsWith('/en/cancellation-policy')) return '/stornierung/';
      if (path.startsWith('/en/cancellation')) return '/widerruf/';
      return path.replace(/^\/en/, '') || '/de/';
    } else {
      // DE → EN
      if (path === '/de/' || path === '/de' || path === '/' || path === '') return '/en/';
      if (path.startsWith('/trainings')) return '/en/trainings/';
      if (path.startsWith('/coaching')) return '/en/coaching/';
      if (path.startsWith('/vita')) return '/en/about/';
      if (path.startsWith('/schnabeltrifftohr/') && path.length > '/schnabeltrifftohr/'.length) {
        // Preserve character sub-path: /schnabeltrifftohr/sabrina/ → /en/schnabeltrifftohr/sabrina/
        return '/en' + path;
      }
      if (path.startsWith('/schnabeltrifftohr')) return '/en/schnabeltrifftohr/';
      if (path.startsWith('/needy-podcast')) return '/en/needy-podcast/';
      if (path.startsWith('/impressum')) return '/en/imprint/';
      if (path.startsWith('/datenschutz')) return '/en/privacy/';
      if (path.startsWith('/agb')) return '/en/terms/';
      if (path.startsWith('/stornierung')) return '/en/cancellation-policy/';
      if (path.startsWith('/widerruf')) return '/en/cancellation/';
      return '/en/';
    }
  }

  function isActive(href) {
    if (!isEN && href === '/de/' && (path === '/de/' || path === '/de')) return true;
    if (isEN && href === '/en/' && (path === '/en/' || path === '/en')) return true;
    if (href !== '/de/' && href !== '/en/' && path.startsWith(href)) return true;
    return false;
  }

  function isOtherActive() {
    if (isEN) return path.startsWith('/en/schnabeltrifftohr') || path.startsWith('/en/needy-podcast');
    return path.startsWith('/schnabeltrifftohr') || path.startsWith('/needy-podcast');
  }

  const langToggle = `<li><a href="${getOtherLangUrl()}" style="font-weight:700;color:var(--green) !important;">${isEN ? 'DE' : 'EN'}</a></li>`;

  const navLinks = isEN ? `
    <li><a href="/en/about/"${isActive('/en/about/') ? ' class="active"' : ''}>About</a></li>
    <li><a href="/en/trainings/"${isActive('/en/trainings/') ? ' class="active"' : ''}>Trainings</a></li>
    <li><a href="/en/coaching/"${isActive('/en/coaching/') ? ' class="active"' : ''}>Coaching &amp; Mediation</a></li>
    <li class="nav__dropdown">
      <span class="nav__dropdown__trigger${isOtherActive() ? ' active' : ''}">Other</span>
      <ul class="nav__dropdown__menu">
        <li><a href="/en/schnabeltrifftohr/"${isActive('/en/schnabeltrifftohr/') ? ' class="active"' : ''}>Schnabel trifft Ohr</a></li>
        <li><a href="/en/needy-podcast/"${isActive('/en/needy-podcast/') ? ' class="active"' : ''}>Needy Podcast</a></li>
      </ul>
    </li>
    ${langToggle}
    <li><a href="/en/#contact" class="nav__cta">Contact</a></li>
  ` : `
    <li><a href="/vita/"${isActive('/vita/') ? ' class="active"' : ''}>Über mich</a></li>
    <li><a href="/trainings/"${isActive('/trainings/') ? ' class="active"' : ''}>Trainings</a></li>
    <li><a href="/coaching/"${isActive('/coaching/') ? ' class="active"' : ''}>Coaching &amp; Mediation</a></li>
    <li class="nav__dropdown">
      <span class="nav__dropdown__trigger${isOtherActive() ? ' active' : ''}">Sonstiges</span>
      <ul class="nav__dropdown__menu">
        <li><a href="/schnabeltrifftohr/"${isActive('/schnabeltrifftohr/') ? ' class="active"' : ''}>Schnabel trifft Ohr</a></li>
        <li><a href="/needy-podcast/"${isActive('/needy-podcast/') ? ' class="active"' : ''}>Needy Podcast</a></li>
      </ul>
    </li>
    ${langToggle}
    <li><a href="/de/#kontakt" class="nav__cta">Kontakt</a></li>
  `;

  const navHTML = `
  <nav class="nav">
    <div class="nav__inner">
      <a href="${isEN ? '/en/' : '/de/'}" class="nav__logo"><img src="/logo.svg" alt="Jacob Noon" height="38" style="display:block;"></a>
      <button class="nav__toggle" aria-label="Toggle menu" onclick="document.querySelector('.nav__links').classList.toggle('open')">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav__links">
        ${navLinks}
      </ul>
    </div>
  </nav>`;

  // --- FOOTER ---
  const footerServices = isEN ? `
    <ul>
      <li><a href="/en/trainings/">Inhouse Trainings</a></li>
      <li><a href="/en/coaching/">Coaching</a></li>
      <li><a href="/en/coaching/#mediation">Mediation</a></li>
    </ul>` : `
    <ul>
      <li><a href="/trainings/">Inhouse-Trainings</a></li>
      <li><a href="/coaching/">Coaching</a></li>
      <li><a href="/coaching/#mediation">Mediation</a></li>
    </ul>`;

  const footerMore = isEN ? `
    <ul>
      <li><a href="/en/about/">About</a></li>
      <li><a href="/en/schnabeltrifftohr/">Schnabel trifft Ohr</a></li>
      <li><a href="/en/needy-podcast/">Needy Podcast</a></li>
      <li><a href="/en/#contact">Contact</a></li>
    </ul>` : `
    <ul>
      <li><a href="/vita/">Über mich</a></li>
      <li><a href="/schnabeltrifftohr/">Schnabel trifft Ohr</a></li>
      <li><a href="/needy-podcast/">Needy Podcast</a></li>
      <li><a href="/de/#kontakt">Kontakt</a></li>
    </ul>`;

  const contactHeading = isEN ? 'Contact' : 'Kontakt';
  const locationLabel = isEN ? 'Berlin · Europe-wide' : 'Berlin · europaweit';
  const followLabel = isEN ? 'Follow' : 'Folgen';

  // Social SVG icons (inline so no external deps)
  const iconLinkedIn = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" style="pointer-events:none;"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>`;
  const iconMail = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z"/></svg>`;
  const iconPhone = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79A15.05 15.05 0 0 0 13.21 17.38L15.42 15.17A1 1 0 0 1 16.45 14.93C17.55 15.29 18.74 15.49 20 15.49A1 1 0 0 1 21 16.49V20A1 1 0 0 1 20 21A17 17 0 0 1 3 4A1 1 0 0 1 4 3H7.5A1 1 0 0 1 8.5 4C8.5 5.27 8.7 6.46 9.06 7.56A1 1 0 0 1 8.81 8.58L6.62 10.79Z"/></svg>`;
  const iconPin = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2A8 8 0 0 0 4 10C4 15.4 12 22 12 22S20 15.4 20 10A8 8 0 0 0 12 2M12 12A2.5 2.5 0 0 1 9.5 9.5A2.5 2.5 0 0 1 12 7A2.5 2.5 0 0 1 14.5 9.5A2.5 2.5 0 0 1 12 12Z"/></svg>`;

  const footerContact = `
    <ul class="footer__contact">
      <li><a href="mailto:mail@jacobnoon.com">${iconMail}<span>mail@jacobnoon.com</span></a></li>
      <li><a href="tel:+4917682237530">${iconPhone}<span>+49 176 82237530</span></a></li>
      <li class="footer__contact-static">${iconPin}<span>${locationLabel}</span></li>
    </ul>
    <div class="footer__social-label">${followLabel}</div>
    <div class="footer__social">
      <a href="https://www.linkedin.com/in/jacob-noon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${iconLinkedIn}<span>LinkedIn</span></a>
    </div>`;

  const footerDesc = isEN
    ? 'Trainer, coach and mediator for conflict, negotiation and leadership communication. Based in Berlin, working Europe-wide and online.'
    : 'Trainer, Coach und Mediator für Konflikt, Verhandlung und Kommunikation. Berlin-basiert, europaweit und online tätig.';

  const year = new Date().getFullYear();
  const footerCopy = `© ${year} Jacob Noon · Noon Coaching · Berlin`;

  const legalLinks = isEN ? `
    <a href="/en/imprint/">Imprint</a>
    <a href="/en/privacy/">Privacy</a>
    <a href="/en/terms/">Terms</a>
    <a href="/en/cancellation/">Right of Withdrawal</a>
    <a href="/en/cancellation-policy/">Cancellation Policy</a>` : `
    <a href="/impressum/">Impressum</a>
    <a href="/datenschutz/">Datenschutz</a>
    <a href="/agb/">AGB</a>
    <a href="/widerruf/">Widerruf</a>
    <a href="/stornierung/">Stornierung</a>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__col footer__col--brand">
          <a href="${isEN ? '/en/' : '/de/'}" class="footer__logo"><img src="/logo-white.svg" alt="Jacob Noon" height="34"></a>
          <p>${footerDesc}</p>
        </div>
        <div class="footer__col">
          <h4>${isEN ? 'Services' : 'Angebote'}</h4>
          ${footerServices}
        </div>
        <div class="footer__col">
          <h4>${isEN ? 'More' : 'Mehr'}</h4>
          ${footerMore}
        </div>
        <div class="footer__col footer__col--contact">
          <h4>${contactHeading}</h4>
          ${footerContact}
        </div>
      </div>
      <div class="footer__bottom">
        <span>${footerCopy}</span>
        <div class="footer__legal">
          ${legalLinks}
        </div>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
