/* ═══════════════════════════════════════════════════
   PORTFOLIO – Main JavaScript
   Scroll reveals, navbar behavior, mobile menu,
   smooth scrolling, and interactive effects
   ═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    // ─────────────────────────────────────────────
    // DOM ELEMENTS
    // ─────────────────────────────────────────────
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('navHamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    // ─────────────────────────────────────────────
    // SCROLL REVEAL (Intersection Observer)
    // ─────────────────────────────────────────────
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');
        if (!reveals.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.dataset.delay || 0;
                        setTimeout(() => {
                            entry.target.classList.add('revealed');
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -60px 0px',
            }
        );

        reveals.forEach((el, i) => {
            const parent = el.parentElement;
            const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
            const index = siblings.indexOf(el);
            if (index > 0) {
                el.dataset.delay = index * 100;
            }
            observer.observe(el);
        });
    }

    // ─────────────────────────────────────────────
    // NAVBAR SCROLL EFFECT
    // ─────────────────────────────────────────────
    function initNavbarScroll() {
        let ticking = false;

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (window.scrollY > 60) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ─────────────────────────────────────────────
    // MOBILE MENU TOGGLE
    // ─────────────────────────────────────────────
    function initMobileMenu() {
        if (!hamburger || !mobileMenu) return;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active')
                ? 'hidden'
                : '';
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach((link) => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ─────────────────────────────────────────────
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ─────────────────────────────────────────────
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = navbar.offsetHeight;
                    const targetPos =
                        target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                    window.scrollTo({
                        top: targetPos,
                        behavior: 'smooth',
                    });
                }
            });
        });
    }

    // ─────────────────────────────────────────────
    // ACTIVE NAV LINK HIGHLIGHTING
    // ─────────────────────────────────────────────
    function initActiveNavHighlight() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        if (!sections.length || !navLinks.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach((link) => {
                            const href = link.getAttribute('href');
                            if (href === `#${id}`) {
                                link.classList.add('active');
                            } else {
                                link.classList.remove('active');
                            }
                        });
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '-72px 0px -50% 0px',
            }
        );

        sections.forEach((section) => observer.observe(section));
    }

    // ─────────────────────────────────────────────
    // MAGNETIC BUTTONS — subtle hover pull effect
    // ─────────────────────────────────────────────
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .nav-cta');

        buttons.forEach((btn) => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

    // ─────────────────────────────────────────────
    // TAG HOVER STAGGER
    // ─────────────────────────────────────────────
    function initTagEffects() {
        const projectRows = document.querySelectorAll('.project-row');

        projectRows.forEach((row) => {
            const tags = row.querySelectorAll('.tag');
            const imageLink = row.querySelector('.project-image-link');

            if (imageLink && tags.length) {
                imageLink.addEventListener('mouseenter', () => {
                    tags.forEach((tag, i) => {
                        setTimeout(() => {
                            tag.style.borderColor = 'var(--border-accent)';
                            tag.style.color = 'var(--accent)';
                        }, i * 50);
                    });
                });

                imageLink.addEventListener('mouseleave', () => {
                    tags.forEach((tag) => {
                        tag.style.borderColor = '';
                        tag.style.color = '';
                    });
                });
            }
        });
    }

    // ─────────────────────────────────────────────
    // INIT
    // ─────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', () => {
        initScrollReveal();
        initNavbarScroll();
        initMobileMenu();
        initSmoothScroll();
        initActiveNavHighlight();
        initMagneticButtons();
        initTagEffects();
    });
})();
