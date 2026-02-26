/**
 * Footer.jsx
 * Site footer with brand info, service links, and contact details.
 */

import React from 'react';
import { scrollToSection } from '@/utils/scroll';

const INSTAGRAM_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const SERVICE_LINKS = [
  { label: 'Social Media Management',       section: 'services' },
  { label: 'Website Development',           section: 'services' },
  { label: 'Shopify Store Management',      section: 'services' },
  { label: 'PR & Branding',                 section: 'services' },
  { label: 'Paid Ads & Performance',        section: 'services' },
  { label: 'Personal Branding',             section: 'services' },
];

export default function Footer({ data }) {
  const { contact } = data;
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', padding: '60px 0 32px', position: 'relative' }}>
      <div className="accent-line-top" />

      <div className="container">
        {/* ── Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ display: 'inline-block', marginBottom: '16px' }}
              aria-label="Stravon Media — Home"
            >
              <img
                src="/logo.png"
                alt="Stravon Media"
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </a>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-soft)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '260px' }}>
              {data.agency.alternateTagline}
            </p>
            <a
              href={contact.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-accent)', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {INSTAGRAM_ICON}
              {contact.social.instagramHandle}
            </a>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
              Services
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SERVICE_LINKS.map(({ label, section }) => (
                <button
                  key={label}
                  onClick={() => scrollToSection(section)}
                  style={{
                    background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer',
                    fontFamily: 'var(--font-body)', fontSize: '14px',
                    color: 'var(--color-text-soft)', transition: 'color 0.2s', padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-soft)')}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {contact.phones.map((n) => (
                <a key={n} href={`tel:+91${n}`}
                  style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-soft)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-soft)')}>
                  +91 {n}
                </a>
              ))}
              <a href={`mailto:${contact.email}`}
                style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-soft)', transition: 'color 0.2s', wordBreak: 'break-all' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-soft)')}>
                {contact.email}
              </a>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-soft)' }}>
                📍 {contact.location}
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop: '1px solid var(--color-border)', paddingTop: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
            © {year} Stravon Media. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
            Built with ❤️ for growth-driven brands.
          </p>
        </div>
      </div>
    </footer>
  );
}
