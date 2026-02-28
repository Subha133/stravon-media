/**
 * Services.jsx
 * ─────────────────────────────────────────────────────────
 * "What We Do" section — redesigned with professional UI,
 * smooth animations, and optimized spacing.
 */

import React, { useState, useRef } from 'react';
import useReveal from '@/hooks/useReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/utils/scroll';
import * as LucideIcons from 'lucide-react';

function Icon({ name, ...props }) {
  const LucideIcon = LucideIcons[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
}

/* ─────────────────────────────────────────────
   Value Pillars — 3 key differentiators
───────────────────────────────────────────── */
const PILLARS = [
  {
    icon: 'Brain',
    heading: 'Strategy First',
    body: 'Data-driven campaigns with clear intent — no guesswork, no vanity metrics.',
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

function PillarCard({ pillar, index }) {
  const ref = useReveal(index * 100);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="reveal pillar-card-new"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`pillar-icon-container ${isHovered ? 'pillar-icon-active' : ''}`}>
        <Icon name={pillar.icon} size={26} strokeWidth={1.5} />
      </div>
      <h4 className="pillar-title-new">{pillar.heading}</h4>
      <p className="pillar-body-new">{pillar.body}</p>
      <div className={`pillar-glow ${isHovered ? 'pillar-glow-active' : ''}`} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Service Card — enhanced with animations
───────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useReveal(index * 80);
  const cardRef = useRef(null);

  const previewFeatures = (service.includes || []).slice(0, 3);
  const extraFeatures = (service.includes || []).slice(3);

  return (
    <div
      ref={(el) => {
        ref.current = el;
        cardRef.current = el;
      }}
      className="reveal service-card-new"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div className={`service-card-border ${isHovered ? 'service-card-border-active' : ''}`} />

      {/* Corner accent */}
      <div className={`service-card-corner ${isHovered ? 'service-card-corner-active' : ''}`} />

      {/* Card content */}
      <div className="service-card-inner">
        {/* Header */}
        <div className="service-card-header">
          <div className={`service-card-icon-wrap ${isHovered ? 'service-card-icon-active' : ''}`}>
            <Icon name={service.icon} size={22} strokeWidth={1.5} />
          </div>
          <span className="service-card-number">
            {String(service.id).padStart(2, '0')}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="service-card-title-new">{service.title}</h3>
        <p className="service-card-desc-new">{service.description}</p>

        {/* Features */}
        <div className="service-card-features">
          {previewFeatures.map((feat, i) => (
            <div
              key={feat}
              className="service-feature-item"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="service-feature-check">
                <Icon name="Check" size={12} strokeWidth={2.5} />
              </span>
              <span className="service-feature-text">{feat}</span>
            </div>
          ))}

          {/* Expandable extras */}
          {extraFeatures.length > 0 && (
            <>
              <div
                className={`service-extra-features ${expanded ? 'service-extra-expanded' : ''}`}
              >
                {extraFeatures.map((feat) => (
                  <div key={feat} className="service-feature-item">
                    <span className="service-feature-check">
                      <Icon name="Check" size={12} strokeWidth={2.5} />
                    </span>
                    <span className="service-feature-text">{feat}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setExpanded((v) => !v)}
                className="service-expand-btn"
              >
                <span className={`service-expand-icon ${expanded ? 'service-expand-icon-rotated' : ''}`}>
                  <Icon name="ChevronDown" size={14} strokeWidth={2} />
                </span>
                {expanded ? 'Show less' : `+${extraFeatures.length} more`}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section Header Component
───────────────────────────────────────────── */
function SectionHeader() {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal services-header-new">
      <SectionLabel center>What We Do</SectionLabel>
      <h2 className="services-title-new">
        One Agency.
        <span className="gradient-text"> Every Growth Channel.</span>
      </h2>
      <p className="services-subtitle-new">
        We combine branding, technology, performance marketing, and authority
        building under one strategic growth system.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Section Export
───────────────────────────────────────────── */
export default function Services({ data }) {
  const regularServices = data.services.filter((s) => !s.targetAudience);

  return (
    <section id="services" className="section services-section-new">
      {/* Background effects */}
      <div className="services-bg-ambient" />
      <div className="services-bg-grid" />
      <div className="accent-line-top" style={{ bottom: 0, top: 'auto' }} />

      <div className="container">
        {/* Section Header */}
        <SectionHeader />

        {/* Value Pillars */}
        <div className="pillars-container">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.heading} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Section Divider */}
        <div className="services-divider">
          <span className="services-divider-text">Our Services</span>
          <div className="services-divider-line" />
        </div>

        {/* Service Cards Grid */}
        <div className="services-grid-new">
          {regularServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta-new">
          <p className="services-cta-text">Not sure which service fits your needs?</p>
          <Button variant="secondary" onClick={() => scrollToSection('contact')}>
            Let&apos;s Talk Strategy
            <Icon name="ArrowRight" size={16} strokeWidth={2} style={{ marginLeft: '8px' }} />
          </Button>
        </div>
      </div>
    </section>
  );
}
