import { useEffect, useRef } from 'react';

/**
 * useReveal
 * ─────────────────────────────────────────────────────────
 * Attaches an IntersectionObserver to a ref and adds the
 * `.visible` class when the element enters the viewport.
 * Used in conjunction with the `.reveal` CSS utility class.
 *
 * @param {number} delay - Optional delay in ms before the class is added.
 * @returns {React.RefObject} - Ref to attach to the target element.
 */
export default function useReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
