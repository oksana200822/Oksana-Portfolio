import { useEffect } from 'react';

export function useScrollReveal(loading) {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (loading || motion.matches || !('IntersectionObserver' in window)) return;

    const animations = new Set();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (motion.matches || entry.target.contains(document.activeElement)) continue;
        // Animate only visible sections; content stays readable if animation is unavailable.
        const animation = entry.target.animate?.([
          { opacity: 0, transform: 'translateY(22px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 600, easing: 'cubic-bezier(.22, 1, .36, 1)' });
        if (animation) {
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

    document.querySelectorAll([
      '.hero-content', '.portrait-area', '.section-heading', '.profile-copy',
      '.experience', '.project', '.skill', '.training', '.organization article',
      '.contact-heading', '.email-link', '.contact-links',
    ].join(',')).forEach(element => observer.observe(element));

    const stop = () => {
      if (!motion.matches) return;
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    motion.addEventListener('change', stop);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      motion.removeEventListener('change', stop);
    };
  }, [loading]);
}
