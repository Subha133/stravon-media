/**
 * Services.jsx
 * ─────────────────────────────────────────────────────────
 * "What We Do" section — full-width overview intro strip
 * followed by a dynamic service cards grid.
 */

import React, { useState } from 'react';
import useReveal from '@/hooks/useReveal';
import GlassCard from '@/components/ui/GlassCard';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/utils/scroll';
import * as LucideIcons from 'lucide-react';

function Icon({ name, ...props }) {
  const LucideIcon = LucideIcons[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
}

/* ─────────────────────────────────────────────
   Overview Strip — 3 value pillars above cards
───────────────────────────────────────────── */
const PILLARS = [
  {
    icon: 'Brain',
    heading: 'Strategy First',
    body: 'Every campaign starts with data and intent — no guesswork, no vanity metrics.',
  },
  {
    icon: 'Settings',
    heading: 'End-to-End Execution',
    body: 'From brand identity to paid ads, we handle every layer of your digital growth.',
  },
  {
    icon: 'BarChart2',
    heading: 'Measurable Results',
    body: 'Clear KPIs, transparent reporting, and ROI you can actually see.',
  },
];

function OverviewStrip({ ref: titleRef }) {
  const pillarsRef = useReveal(100);

  return (
    <>
      {/* Heading */}
      <div ref={titleRef} className="reveal services-heading">
        <SectionLabel center>What We Do</SectionLabel>
        <h2 className="services-title">
          One Agency.{' '}
          <span className="gradient-text">Every Growth Channel.</span>
        </h2>
        <p className="services-description">
          We combine branding, technology, performance marketing, and authority
          building under one strategic growth system — so you never have to
          juggle multiple agencies again.
        </p>
      </div>

      {/* 3 pillars */}
      <div ref={pillarsRef} className="reveal pillars-grid">
        {PILLARS.map((p, i) => (
          <div key={i} className="pillar-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', padding: '24px 28px', borderRadius: '14px' }}>
            <div className="pillar-icon-wrapper">
              <Icon name={p.icon} size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="pillar-title">
                {p.heading}
              </h4>
              <p className="pillar-body">
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Sub-heading before cards */}
      <div className="services-subtitle-wrapper">
        <p className="services-subtitle">
          Our Full Service Suite
        </p>
        <div className="subtitle-line" />
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   Regular Service Card
───────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useReveal(index * 70);
  const previewFeatures = (service.includes || []).slice(0, 4);
  const extraFeatures = (service.includes || []).slice(4);

  return (
    <GlassCard
      ref={ref}
      className="reveal service-card-hover service-card"
    >
      {/* Corner glow */}
      <div className="card-corner-glow" />

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div className="card-icon-wrapper">
          <Icon name={service.icon} size={24} strokeWidth={1.5} />
        </div>
        <span className="card-id">
          {String(service.id).padStart(2, '0')}
        </span>
      </div>

      <h3 className="service-card-title">
        {service.title}
      </h3>
      <p className="service-card-description">
        {service.description}
      </p>

      {/* Features */}
      <div className="card-features-wrapper">
        {previewFeatures.map((feat) => (
          <FeatureItem key={feat} text={feat} />
        ))}

        {/* Expandable extras */}
        {extraFeatures.length > 0 && (
          <>
            <div style={{
              maxHeight: expanded ? `${extraFeatures.length * 30}px` : '0',
              overflow: 'hidden',
              transition: 'max-height 0.35s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '7px',
            }}>
              {extraFeatures.map((feat) => (
                <FeatureItem key={feat} text={feat} />
              ))}
            </div>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="expand-btn"
            >
              <span className="expand-icon" style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}>▾</span>
              {expanded ? 'Show less' : `+${extraFeatures.length} more`}
            </button>
          </>
        )}
      </div>
    </GlassCard>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="feature-item">
      <span className="feature-dot" />
      <span className="feature-text">{text}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Section Export
───────────────────────────────────────────── */
export default function Services({ data }) {
  const titleRef = useReveal();

  // Separate personal branding from regular services (it lives in App.jsx now)
  const regularServices = data.services.filter((s) => !s.targetAudience);

  return (
    <section id="services" className="section services-section">
      {/* Section backgrounds */}
      <div className="services-bg-glow" />
      <div className="accent-line-top" style={{ bottom: 0, top: 'auto' }} />

      <div className="container">
        {/* ── Overview strip ── */}
        <OverviewStrip ref={titleRef} />

        {/* ── Service cards grid ── */}
        <div className="services-grid">
          {/* Regular service cards */}
          {regularServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="services-bottom-cta">
          <p className="cta-text">
            Not sure which service is right for you?
          </p>
          <Button variant="secondary" onClick={() => scrollToSection('contact')}>
            Let&apos;s Talk →
          </Button>
        </div>
      </div>
    </section>
  );
}
