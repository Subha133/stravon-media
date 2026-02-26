/**
 * Hero.jsx
 * Full-viewport hero section with animated entrance,
 * background glows, grid overlay, headline, and CTA buttons.
 */

import React, { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/utils/scroll';
import * as LucideIcons from 'lucide-react';

const ANIM_ITEMS = ['hero-badge', 'hero-title', 'hero-sub', 'hero-ctas', 'hero-stats'];

export default function Hero({ data }) {
  const { agency } = data;
  const containerRef = useRef(null);

  /* Staggered entrance animation */
  useEffect(() => {
    const timer = setTimeout(() => {
      ANIM_ITEMS.forEach((id, i) => {
        setTimeout(() => {
          const el = containerRef.current?.querySelector(`#${id}`);
          if (el) {
            el.classList.add('visible');
          }
        }, i * 160);
      });
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="hero-section">
      {/* ── Backgrounds ── */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-glow-3" />
      <div className="hero-grid-overlay" />

      {/* ── Content ── */}
      <div className="container hero-content">
        {/* Badge */}
        <div id="hero-badge" className="reveal">
          <div className="badge-container">
            <span className="dot glow-pulse" />
            <span className="stat-label" style={{ color: 'var(--color-accent)' }}>
              Full-Service Digital Growth Agency
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 id="hero-title" className="hero-title reveal">
          Build Authority.{' '}
          <span className="gradient-text">Drive Growth.</span>{' '}
          <span style={{ color: 'var(--color-text-soft)' }}>Own Your Market.</span>
        </h1>

        {/* Sub */}
        <p id="hero-sub" className="hero-sub reveal">
          {agency.description}
        </p>

        {/* CTA buttons */}
        <div id="hero-ctas" className="hero-ctas reveal">
          <Button variant="primary" onClick={() => scrollToSection('contact')} style={{ padding: '16px 32px' }}>
            Start Growing →
          </Button>
          <a
            href={`https://wa.me/${data.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#25D366',
              color: '#fff',
              padding: '15px 28px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '15px',
              boxShadow: '0 10px 20px rgba(37,211,102,0.15)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <LucideIcons.MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div id="hero-stats" className="hero-stats reveal">
          {agency.stats.map(({ value, label }) => (
            <div key={label} className="stat-item">
              <div className="stat-value">
                {value}
              </div>
              <div className="stat-label">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
