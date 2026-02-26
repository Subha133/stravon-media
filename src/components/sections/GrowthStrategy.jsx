/**
 * GrowthStrategy.jsx
 * Displays the 5-step growth process, expected results, and reasons for digital branding.
 */

import React from 'react';
import useReveal from '@/hooks/useReveal';
import GlassCard from '@/components/ui/GlassCard';
import SectionLabel from '@/components/ui/SectionLabel';
import * as LucideIcons from 'lucide-react';

function Icon({ name, ...props }) {
    const LucideIcon = LucideIcons[name];
    return LucideIcon ? <LucideIcon {...props} /> : <LucideIcons.Check {...props} />;
}

export default function GrowthStrategy({ data }) {
    const { agency, process } = data;
    const revealTitle = useReveal();
    const revealProcess = useReveal(200);
    const revealExtra = useReveal(400);

    return (
        <section id="strategy" className="section" style={{ background: 'var(--color-bg-alt)' }}>
            <div className="container">

                {/* ── Header ── */}
                <div ref={revealTitle} className="reveal text-center" style={{ marginBottom: '64px' }}>
                    <SectionLabel>Our Strategy</SectionLabel>
                    <h2 style={{ fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        A Proven System for <span className="gradient-text">Consistent Growth</span>
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '20px auto 0', color: 'var(--color-text-soft)', fontSize: '18px' }}>
                        {agency.whoWeAre}
                    </p>
                </div>

                {/* ── Process Steps (Timeline Style) ── */}
                <div ref={revealProcess} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '80px' }}>
                    {process.map((item, index) => (
                        <GlassCard key={index} style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '80px', fontWeight: 900, color: 'rgba(232,201,126,0.05)', lineHeight: 1, pointerEvents: 'none' }}>
                                {item.step}
                            </div>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(232,201,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--color-accent)' }}>
                                <span style={{ fontWeight: 700, fontSize: '20px' }}>{item.step}</span>
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'var(--color-text)' }}>{item.title}</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {item.details.map((detail, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'start', gap: '10px', fontSize: '14px', color: 'var(--color-text-soft)', lineHeight: 1.5 }}>
                                        <LucideIcons.Check size={14} style={{ marginTop: '3px', color: 'var(--color-accent)', flexShrink: 0 }} />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    ))}
                </div>

                {/* ── Extra Insights ── */}
                <div ref={revealExtra} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '40px' }}>

                    {/* Why Digital Branding */}
                    <GlassCard style={{ padding: '40px', border: '1px solid rgba(232,201,126,0.15)' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <LucideIcons.HelpCircle className="color-accent" size={28} />
                            Why Digital Branding?
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {agency.whyDigitalBranding.map((reason, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', marginTop: '8px', flexShrink: 0 }} />
                                    <p style={{ fontSize: '16px', color: 'var(--color-text-soft)', lineHeight: 1.6 }}>{reason}</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Expected Results */}
                    <GlassCard style={{ padding: '40px', background: 'linear-gradient(135deg, rgba(232,201,126,0.08), transparent)' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <LucideIcons.TrendingUp className="color-accent" size={28} />
                            Expected Results
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {agency.expectedResults.map((result, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ color: 'var(--color-accent)' }}><LucideIcons.ShieldCheck size={24} /></div>
                                    <span style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text)' }}>{result}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '32px', padding: '20px', borderRadius: '12px', background: 'var(--color-accent)', color: '#000', textAlign: 'center', fontWeight: 700 }}>
                            Build Authority. Own Your Market.
                        </div>
                    </GlassCard>

                </div>

                {/* ── WhatsApp CTA ── */}
                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <a
                        href={`https://wa.me/${data.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: '#25D366',
                            color: '#fff',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            fontWeight: 700,
                            fontSize: '16px',
                            boxShadow: '0 10px 20px rgba(37,211,102,0.2)',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                    >
                        <LucideIcons.MessageCircle size={24} />
                        Discuss Your Growth on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
