import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useSmoothScroll
 * Integrates Lenis momentum scrolling with GSAP ScrollTrigger ticker
 * to provide buttery-smooth Awwwards-grade scrub animations.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    // Disable smooth momentum scroll if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Global delegated click listener for internal anchors to ensure smooth Lenis transition
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#!') return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        lenis.scrollTo(targetElement, {
          offset: 0,
          duration: 1.2,
        });
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick, { capture: true });
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);
}
