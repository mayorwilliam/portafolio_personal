/* ═══════════════════════════════════════════════════
   PORTFOLIO – Main JavaScript
   Scroll reveals, navbar behavior, mobile menu,
   smooth scrolling, and carousel logic
   ═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    // ─────────────────────────────────────────────
    // DOM ELEMENTS
    // ─────────────────────────────────────────────
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('navHamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselDots = document.getElementById('carouselDots');

    // ─────────────────────────────────────────────
    // SCROLL REVEAL (Intersection Observer)
    // ─────────────────────────────────────────────
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');
        if (!reveals.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        // Stagger siblings slightly
                        const delay = entry.target.dataset.delay || 0;
                        setTimeout(() => {
                            entry.target.classList.add('revealed');
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        reveals.forEach((el, i) => {
            // Auto-stagger elements that are siblings
            const parent = el.parentElement;
            const siblings = Array.from(parent.querySelectorAll('.reveal'));
            const index = siblings.indexOf(el);
            if (index > 0) {
                el.dataset.delay = index * 80;
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
        onScroll(); // Initial check
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

        // Close on link click
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
    // CAROUSEL LOGIC
    // ─────────────────────────────────────────────
    function initCarousel() {
        if (!carouselTrack || !carouselDots) return;

        const dots = carouselDots.querySelectorAll('.dot');
        let currentPage = 0;

        function scrollToPage(page) {
            const cards = carouselTrack.querySelectorAll('.project-card');
            if (!cards.length) return;

            const cardsPerPage = window.innerWidth > 768 ? 4 : 2;
            const totalPages = Math.ceil(cards.length / cardsPerPage);
            page = Math.max(0, Math.min(page, totalPages - 1));

            const targetCard = cards[page * cardsPerPage];
            if (targetCard) {
                const containerPadding = parseInt(
                    getComputedStyle(document.documentElement).getPropertyValue(
                        '--container-padding'
                    )
                ) || 40;

                carouselTrack.parentElement.scrollTo({
                    left: targetCard.offsetLeft - containerPadding,
                    behavior: 'smooth',
                });
            }

            currentPage = page;
            dots.forEach((d, i) => d.classList.toggle('active', i === page));
        }

        dots.forEach((dot) => {
            dot.addEventListener('click', () => {
                scrollToPage(parseInt(dot.dataset.index));
            });
        });

        // Update dots on scroll
        let scrollTimer;
        carouselTrack.parentElement.addEventListener(
            'scroll',
            () => {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    const scrollLeft = carouselTrack.parentElement.scrollLeft;
                    const cards = carouselTrack.querySelectorAll('.project-card');
                    const cardsPerPage = window.innerWidth > 768 ? 4 : 2;

                    let closestPage = 0;
                    let minDist = Infinity;

                    cards.forEach((card, i) => {
                        if (i % cardsPerPage === 0) {
                            const dist = Math.abs(card.offsetLeft - scrollLeft);
                            if (dist < minDist) {
                                minDist = dist;
                                closestPage = Math.floor(i / cardsPerPage);
                            }
                        }
                    });

                    dots.forEach((d, i) =>
                        d.classList.toggle('active', i === closestPage)
                    );
                }, 100);
            },
            { passive: true }
        );
    }

    // ─────────────────────────────────────────────
    // TYPING EFFECT ON HERO (subtle)
    // ─────────────────────────────────────────────
    function initHeroEffect() {
        const heroLabel = document.querySelector('.hero-label');
        if (!heroLabel) return;

        // Add a subtle cursor blink after the label
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.cssText = `
            display: inline-block;
            color: rgba(255,255,255,0.4);
            animation: blink 1s step-end infinite;
            margin-left: 2px;
            font-weight: 300;
        `;

        // Add blink keyframes
        if (!document.querySelector('#blink-style')) {
            const style = document.createElement('style');
            style.id = 'blink-style';
            style.textContent = `
                @keyframes blink {
                    50% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        heroLabel.appendChild(cursor);

        // Remove cursor after a few seconds
        setTimeout(() => {
            cursor.style.animation = 'none';
            cursor.style.opacity = '0';
            cursor.style.transition = 'opacity 0.5s ease';
        }, 4000);
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
    // INIT
    // ─────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', () => {
        initScrollReveal();
        initNavbarScroll();
        initMobileMenu();
        initSmoothScroll();
        initCarousel();
        initHeroEffect();
        initActiveNavHighlight();
    });
})();
