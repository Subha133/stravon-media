/**
 * SectionLabel.jsx
 * Small uppercase label displayed above section headings.
 */

import React from 'react';

export default function SectionLabel({ children, center = false }) {
  return (
    <div
      className="section-label"
      style={center ? { justifyContent: 'center' } : undefined}
    >
      {children}
    </div>
  );
}
