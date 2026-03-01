/* ============================================
   Marvin Schneider – Portfolio
   Shared JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ── Mobile Navigation ───────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  /* ── Active Nav Link ─────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Scroll: Navbar background ───────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const update = () => {
      navbar.style.background = window.scrollY > 20
        ? 'rgba(7, 11, 24, 0.97)'
        : 'rgba(7, 11, 24, 0.85)';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── Intersection Observer: fade-in cards ── */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.card, .hobby-card, .project-featured, .info-item, .timeline-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  /* Inject fade-in CSS once */
  if (!document.getElementById('fi-style')) {
    const style = document.createElement('style');
    style.id = 'fi-style';
    style.textContent = `
      .fade-in { opacity: 0; transform: translateY(18px); transition: opacity 0.55s ease, transform 0.55s ease; }
      .fade-in.visible { opacity: 1; transform: none; }
    `;
    document.head.appendChild(style);
  }
})();
