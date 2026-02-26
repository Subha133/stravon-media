import React from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import useReveal from '@/hooks/useReveal';

const images = Array.from({ length: 18 }).map(
  (_, i) => `/new_images/61230592319560779${68 + i}.jpg`
);

export default function Gallery() {
  const headerRef = useReveal();
  const theta = 360 / images.length;

  return (
    <section id="gallery" className="section" style={{ background: '#050508', overflow: 'hidden' }}>
      {/* Background glow lines */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-border-accent), transparent)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(232,201,126,0.03), transparent)', pointerEvents: 'none' }} />

      <div className="container" style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 2 }}>
        <div ref={headerRef} className="reveal">
          <SectionLabel center>Our Gallery</SectionLabel>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 800,
            color: 'var(--color-text)',
            lineHeight: 1.1,
          }}>
            Creative <span className="gradient-text">Mastery</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--color-text-soft)',
            maxWidth: '500px',
            margin: '20px auto 0',
            lineHeight: 1.7
          }}>
            Explore our continuous 3D carousel showcasing premium moments and top-tier branding.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --gallery-item-width: 180px;
          --gallery-item-height: 260px;
          --gallery-radius: 680px; /* Adjusted for laptop size to not overpower the screen */
        }
        @media (max-width: 768px) {
          :root {
            --gallery-item-width: 150px;
            --gallery-item-height: 220px;
            --gallery-radius: 550px; /* Increased for wider gap */
          }
        }
        
        @keyframes spin-3d-carousel {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-360deg); }
        }

        .gallery-viewport {
          position: relative;
          width: 100%;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1400px;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .gallery-cylinder {
          position: relative;
          width: var(--gallery-item-width);
          height: var(--gallery-item-height);
          transform-style: preserve-3d;
          animation: spin-3d-carousel 45s infinite linear;
        }

        .gallery-cylinder:hover {
          animation-play-state: paused;
        }

        .gallery-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          /* Deeper shadow for stunning 3D depth and subtle gold glow */
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.9), 0 0 25px rgba(232,201,126,0.15);
          /* Subtle glass border */
          border: 1px solid rgba(232,201,126, 0.4);
          transition: filter 0.3s;
          /* Stronger reflection effect */
          -webkit-box-reflect: below 20px linear-gradient(transparent, transparent 20%, rgba(0,0,0,0.35));
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Dim images that aren't facing the user */
        .gallery-item::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0, 0.3);
          transition: background 0.3s;
        }

        .gallery-cylinder:hover .gallery-item::after {
          background: rgba(0,0,0, 0.5);
        }
        .gallery-cylinder:hover .gallery-item:hover::after {
          background: rgba(0,0,0, 0);
        }

        @media (max-width: 768px) {
          .gallery-viewport {
            height: 350px;
          }
        }
      `}} />

      <div className="gallery-viewport">
        <div className="gallery-cylinder">
          {images.map((src, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                transform: `rotateY(${i * theta}deg) translateZ(var(--gallery-radius))`
              }}
            >
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
