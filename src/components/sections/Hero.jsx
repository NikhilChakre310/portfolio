import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowDown } from 'lucide-react';

/**
 * Hero — Neon glassmorphic opening
 * Massive serif type with glowing neon accents and frosted glass elements.
 */
export default function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const lineRef = useRef(null);
  const pillRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      pillRef.current,
      { opacity: 0, y: -20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' }
    )
    .fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power3.inOut' },
      '-=0.3'
    )
    .fromTo(
      headlineRef.current,
      { opacity: 0, y: 60, filter: 'blur(12px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );

    return () => tl.kill();
  }, []);

  const scrollDown = () => {
    if (window.lenis) {
      window.lenis.scrollTo('#about', { duration: 1.2, offset: -40 });
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto w-full py-32 sm:py-40">
        {/* Neon glass status pill */}
        <div ref={pillRef} className="mb-8">
          <div className="glass-pill inline-flex items-center gap-2.5 px-4 py-2 glow-neon">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
            </span>
            <span className="text-[11px] font-mono tracking-wider text-neutral-300 uppercase">
              {PERSONAL_INFO.status}
            </span>
          </div>
        </div>

        {/* Neon accent line */}
        <div
          ref={lineRef}
          className="w-20 h-px mb-10 origin-left"
          style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-blue), transparent)' }}
        />

        {/* Name */}
        <h1
          ref={headlineRef}
          className="text-[clamp(3rem,10vw,8rem)] font-serif font-normal leading-[0.95] tracking-tight text-white mb-6"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          {PERSONAL_INFO.name}
        </h1>

        {/* Role & Bio */}
        <div ref={subtitleRef} className="max-w-xl">
          <p className="text-base sm:text-lg font-mono font-normal tracking-wide mb-3 text-neon">
            {PERSONAL_INFO.role}
          </p>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            {PERSONAL_INFO.shortBio}
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              if (window.lenis) window.lenis.scrollTo('#projects', { duration: 1.2, offset: -40 });
              else document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-solid px-7 py-3 text-sm tracking-wide"
          >
            View Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (window.lenis) window.lenis.scrollTo('#contact', { duration: 1.2, offset: -40 });
              else document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-glass px-7 py-3 text-sm font-light"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 glass-pill flex flex-col items-center gap-2 px-4 py-3 text-neutral-400 hover:text-[var(--accent)] transition-colors cursor-pointer"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </button>
    </section>
  );
}
