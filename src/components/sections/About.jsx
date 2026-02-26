/**
 * About.jsx
 * Agency about section — mission, vision, USP, and brand personality.
 */

import React from 'react';
import useReveal from '@/hooks/useReveal';
import GlassCard from '@/components/ui/GlassCard';
import SectionLabel from '@/components/ui/SectionLabel';
import * as LucideIcons from 'lucide-react';

function Icon({ name, ...props }) {
  const LucideIcon = LucideIcons[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
}

const MISSION_ITEMS = [
  { icon: 'Rocket', label: 'Our Mission', key: 'mission' },
  { icon: 'Target', label: 'Our Vision', key: 'vision' },
];

export default function About({ data }) {
  const { agency } = data;
  const leftRef = useReveal();
  const rightRef = useReveal(150);

  return (
    <section id="about" className="section" style={{ overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(232,201,126,0.04), transparent)', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* ── Left: Copy ── */}
          <div ref={leftRef} className="reveal">
            <SectionLabel>Who We Are</SectionLabel>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '24px' }}>
              We Turn Visibility Into <span className="gradient-text">Opportunity</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--color-text-soft)', lineHeight: 1.75, marginBottom: '20px' }}>
              {agency.description}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-text-soft)', lineHeight: 1.75, marginBottom: '36px' }}>
              {agency.usp}
            </p>

            {/* Brand personality tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {agency.brandPersonality.map((trait) => (
                <span key={trait} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, color: 'var(--color-text-soft)', background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '6px 14px' }}>
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Cards ── */}
          <div ref={rightRef} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {MISSION_ITEMS.map(({ icon, label, key }) => (
              <GlassCard key={key} style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ color: 'var(--color-accent)' }}><Icon name={icon} size={28} strokeWidth={1.5} /></span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: 'var(--color-accent)', letterSpacing: '0.02em' }}>{label}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-soft)', lineHeight: 1.7, fontStyle: 'italic' }}>
                  &ldquo;{agency[key]}&rdquo;
                </p>
              </GlassCard>
            ))}

            {/* Tagline highlight */}
            <div style={{ background: 'linear-gradient(135deg, rgba(232,201,126,0.12), rgba(232,201,126,0.04))', border: '1px solid var(--color-border-accent)', borderRadius: 'var(--radius)', padding: '28px 32px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--color-accent)', letterSpacing: '-0.01em' }}>
                &ldquo;{agency.alternateTagline}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
