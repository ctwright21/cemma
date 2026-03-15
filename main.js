/* ============================================
   Competitive Edge MMA — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* === NAV SCROLL BEHAVIOR === */
  const nav = document.querySelector('.nav');
  const scrollThreshold = 20;

  function handleNavScroll() {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();


  /* === MOBILE MENU === */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }


  /* === SMOOTH SCROLL FOR ANCHOR LINKS === */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  /* === SCROLL REVEAL (IntersectionObserver) === */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((el, i) => {
    // Add stagger delay for grouped items
    const parent = el.parentElement;
    if (parent && parent.classList.contains('stagger-group')) {
      const siblings = Array.from(parent.querySelectorAll('.reveal'));
      const index = siblings.indexOf(el);
      el.style.transitionDelay = `${index * 0.10}s`;
    }
    revealObserver.observe(el);
  });


  /* === STATS COUNTER ANIMATION === */
  const statNumbers = document.querySelectorAll('.hero__stat-number');

  function animateCounter(el) {
    const text = el.getAttribute('data-target');
    const hasPlus = text.includes('+');
    const target = parseInt(text.replace('+', ''));
    const duration = target > 100 ? 1500 : 1000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current + (hasPlus ? '+' : '');

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  const statsRow = document.querySelector('.hero__stats');
  if (statsRow) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statNumbers.forEach(el => animateCounter(el));
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsRow);
  }


  /* === FORM HANDLING === */
  const form = document.getElementById('signup-form');
  const formCard = document.querySelector('.form-card__form');
  const formSuccess = document.querySelector('.form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear previous errors
      form.querySelectorAll('.form-input, .form-select').forEach(input => {
        input.classList.remove('error');
      });
      form.querySelectorAll('.form-error-msg').forEach(msg => {
        msg.classList.remove('visible');
      });

      let hasErrors = false;

      // Validate required fields
      const parentName = form.querySelector('#parent-name');
      const childAge = form.querySelector('#child-age');
      const phone = form.querySelector('#phone');

      if (!parentName.value.trim()) {
        parentName.classList.add('error');
        parentName.nextElementSibling.classList.add('visible');
        hasErrors = true;
      }

      if (!childAge.value) {
        childAge.classList.add('error');
        childAge.nextElementSibling.classList.add('visible');
        hasErrors = true;
      }

      if (!phone.value.trim()) {
        phone.classList.add('error');
        phone.nextElementSibling.classList.add('visible');
        hasErrors = true;
      }

      if (hasErrors) return;

      // Success — hide form, show success message
      if (formCard) formCard.style.display = 'none';
      if (formSuccess) formSuccess.classList.add('visible');
    });
  }

});
