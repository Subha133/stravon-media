/**
 * GlassCard.jsx
 * Reusable glassmorphism card wrapper.
 */

import React from 'react';

export default function GlassCard({ children, style = {}, className = '', ...props }) {
  return (
    <div className={`glass-card ${className}`} style={style} {...props}>
      {children}
    </div>
  );
}
