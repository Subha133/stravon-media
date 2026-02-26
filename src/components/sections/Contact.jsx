/**
 * Contact.jsx
 * Contact section with info cards and a WhatsApp-connected form.
 */

import React, { useState } from 'react';
import useReveal from '@/hooks/useReveal';
import GlassCard from '@/components/ui/GlassCard';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import * as LucideIcons from 'lucide-react';

function Icon({ name, ...props }) {
  const LucideIcon = LucideIcons[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
}

/* ── Input styles ── */
const INPUT_STYLE = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--color-border)',
  borderRadius: '10px',
  padding: '14px 18px',
  color: 'var(--color-text)',
  fontFamily: 'var(--font-body)',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const FOCUS_BORDER = () => 'var(--color-accent)';
const BLUR_BORDER = () => 'var(--color-border)';

/* ── WhatsApp icon ── */
const WA_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

/* ── Contact info card ── */
function InfoCard({ icon, label, value, href, external = false }) {
  const content = (
    <GlassCard style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ width: '44px', height: '44px', flexShrink: 0, background: 'var(--color-accent-dim)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
        <Icon name={icon} size={22} strokeWidth={1.5} />
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
          {label}
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text)', whiteSpace: 'pre-line' }}>
          {value}
        </div>
      </div>
    </GlassCard>
  );

  if (!href) return content;
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} style={{ display: 'block' }}>
      {content}
    </a>
  );
}

/* ── Main Component ── */
export default function Contact({ data }) {
  const { contact } = data;
  const titleRef = useReveal();

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Stravon Media!%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, '_blank');
  };

  const phoneValue = contact.phones.map((n) => `+91 ${n}`).join('\n');

  return (
    <section id="contact" className="section" style={{ overflow: 'hidden' }}>
      <div className="accent-line-top" />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,201,126,0.05), transparent)', pointerEvents: 'none' }} />

      <div className="container">
        {/* Heading */}
        <div ref={titleRef} className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <SectionLabel center>Get In Touch</SectionLabel>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', marginBottom: '16px' }}>
            Ready to <span className="gradient-text">Own Your Market?</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--color-text-soft)', maxWidth: '480px', margin: '0 auto' }}>
            Let&apos;s talk about how we can accelerate your digital growth.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '48px', alignItems: 'start' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <InfoCard icon="Phone" label="Call Us" value={phoneValue} href={`tel:+91${contact.phones[0]}`} />
            <InfoCard icon="Mail" label="Email Us" value={contact.email} href={`mailto:${contact.email}`} />
            <InfoCard icon="MapPin" label="Location" value={contact.location} />
            <InfoCard icon="Camera" label="Instagram" value={contact.social.instagramHandle} href={contact.social.instagram} external />

            {/* WhatsApp CTA button */}
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', background: '#25D366', borderRadius: '12px', padding: '18px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: '#fff' }}
            >
              {WA_ICON}
              Chat on WhatsApp
            </a>
          </div>

          {/* ── Right: Form ── */}
          <form
            onSubmit={handleSubmit}
            style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius)', padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}
            noValidate
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', marginBottom: '8px' }}>
              Send a Message
            </h3>

            <label htmlFor="name" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>Name</label>
            <input id="name" type="text" name="name" placeholder="Your Name *" required value={form.name} onChange={onChange} style={INPUT_STYLE} onFocus={(e) => (e.target.style.borderColor = FOCUS_BORDER())} onBlur={(e) => (e.target.style.borderColor = BLUR_BORDER())} />

            <label htmlFor="email" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>Email</label>
            <input id="email" type="email" name="email" placeholder="Email Address *" required value={form.email} onChange={onChange} style={INPUT_STYLE} onFocus={(e) => (e.target.style.borderColor = FOCUS_BORDER())} onBlur={(e) => (e.target.style.borderColor = BLUR_BORDER())} />

            <label htmlFor="phone" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>Phone</label>
            <input id="phone" type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={onChange} style={INPUT_STYLE} onFocus={(e) => (e.target.style.borderColor = FOCUS_BORDER())} onBlur={(e) => (e.target.style.borderColor = BLUR_BORDER())} />

            <label htmlFor="message" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>Message</label>
            <textarea id="message" name="message" placeholder="Tell us about your project *" required rows={5} value={form.message} onChange={onChange} style={{ ...INPUT_STYLE, resize: 'vertical', minHeight: '120px' }} onFocus={(e) => (e.target.style.borderColor = FOCUS_BORDER())} onBlur={(e) => (e.target.style.borderColor = BLUR_BORDER())} />

            <Button variant="primary" fullWidth style={{ padding: '16px' }}>
              Send via WhatsApp →
            </Button>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)', textAlign: 'center' }}>
              We typically respond within a few hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
