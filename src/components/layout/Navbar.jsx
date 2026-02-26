/**
 * Navbar.jsx
 * Sticky navigation bar.
 * - Transparent on top, glass-blur when scrolled.
 * - Active section highlighting via IntersectionObserver.
 * - Responsive hamburger menu for mobile.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS } from '@/constants/navigation';
import { scrollToHref } from '@/utils/scroll';

/* ── Logo ── */
function Logo() {
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      aria-label="Stravon Media — Home"
      className="logo-link"
    >
      <img
        src="/logo.png"
        alt="Stravon Media"
        width={160}
        height={56}
        className="logo-img"
      />
    </a>
  );
}

/* ── Hamburger Icon ── */
function Hamburger({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className="hamburger"
      style={{
        display: 'none',
        flexDirection: 'column',
        gap: '5px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        zIndex: 10,
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            display: 'block',
            width: '24px', height: '2px',
            background: 'var(--color-text)',
            borderRadius: '2px',
            transition: 'var(--transition)',
            transform:
              open && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                open && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            opacity: open && i === 1 ? 0 : 1,
          }}
        />
      ))}
    </button>
  );
}

/* ── Main Component ── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');

  /* Track scroll for navbar background */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active nav link
      const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 120 && bottom >= 120) {
            setActiveHref(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false);
    scrollToHref(href);
  }, []);

  return (
    <>
      {/* ── Desktop / Main Nav ── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`nav-main ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="nav-container">
          <Logo />

          {/* Desktop links */}
          <div className="nav-desktop">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                className={`nav-link ${activeHref === href ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn btn-primary"
              style={{ padding: '10px 22px', fontSize: '13px', letterSpacing: '0.02em' }}
            >
              Get Started →
            </button>
          </div>

          <Hamburger open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        aria-hidden={!menuOpen}
        className={`nav-mobile-overlay ${menuOpen ? 'open' : ''}`}
      >
        <div className="nav-mobile-content">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              className={`nav-link-mobile ${activeHref === href ? 'active' : ''}`}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            style={{
              display: 'block', marginTop: '20px', width: '100%', textAlign: 'center',
            }}
            className="btn btn-primary"
          >
            Get Started →
          </button>
        </div>
      </div>
    </>
  );
}
