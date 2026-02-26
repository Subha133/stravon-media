/**
 * PersonalBranding.jsx
 * Highlight section for the Personal Branding service,
 * targeting specific professional audiences.
 */

import React from 'react';
import useReveal from '@/hooks/useReveal';
import GlassCard from '@/components/ui/GlassCard';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/utils/scroll';

const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7L6 11L12 3" stroke="#e8c97e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PersonalBranding({ data }) {
  const { services } = data;
  const pbService = services.find((s) => s.id === 5); // Match by ID instead of title for stability

  const leftRef = useReveal();
  const rightRef = useReveal(150);

  if (!pbService) return null;

  return (
    <section id="personal-branding" className="pb-section">
      {/* Backgrounds */}
      <div className="pb-bg-gradient" />
      <div className="pb-glow" />

      <div className="container">
        <div className="pb-grid">

          {/* ── Left: Copy ── */}
          <div ref={leftRef} className="reveal">
            <SectionLabel>For Professionals</SectionLabel>
            <h2 className="pb-title">
              Your Personal Brand is Your{' '}
              <span className="gradient-text">Greatest Asset</span>
            </h2>
            <p className="pb-description">
              We build authority systems that position you as the go-to expert in your industry — attracting clients, opportunities, and recognition on autopilot.
            </p>

            {/* Audience pills */}
            <p className="pb-tag-label">
              Perfect For
            </p>
            <div className="pb-audience-list">
              {pbService.targetAudience.map((aud) => (
                <span key={aud} className="pb-audience-tag">
                  {aud}
                </span>
              ))}
            </div>

            <Button variant="primary" onClick={() => scrollToSection('contact')}>
              Build Your Brand →
            </Button>
          </div>

          {/* ── Right: Feature grid ── */}
          <div ref={rightRef} className="reveal pb-features-grid">
            {(pbService.includes || []).map((feat) => (
              <GlassCard key={feat} className="pb-feature-card">
                <div className="pb-check-icon">
                  {CHECK_ICON}
                </div>
                <span className="pb-feature-text">
                  {feat}
                </span>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
