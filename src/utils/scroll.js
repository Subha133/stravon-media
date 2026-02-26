/**
 * scroll.js
 * Utility functions for smooth scrolling behaviour.
 */

/**
 * Smoothly scrolls to a section by its ID.
 * @param {string} id - The element ID (without #)
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Parses a hash string like "#services" and scrolls to that section.
 * @param {string} href - A hash href string e.g. "#services"
 */
export function scrollToHref(href) {
  const id = href.replace('#', '');
  scrollToSection(id);
}
