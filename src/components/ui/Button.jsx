/**
 * Button.jsx
 * Reusable button component with primary and secondary variants.
 */

import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  fullWidth = false,
  style = {},
  ...props
}) {
  const classes = `btn btn-${variant}`;
  const baseStyle = { ...(fullWidth && { width: '100%', justifyContent: 'center' }), ...style };

  if (href) {
    return (
      <a href={href} className={classes} style={baseStyle} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} style={baseStyle} {...props}>
      {children}
    </button>
  );
}
