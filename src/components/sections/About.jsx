import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT_DATA } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

/**
 * About — Neon glassmorphic editorial layout
 * Deep frosted pillar cards with neon accents and shimmer borders.
 */
export default function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.about-reveal'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-6 sm:px-8 lg:px-12 py-28 sm:py-40"
    >
      <div ref={contentRef} className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <p className="about-reveal text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-6">
          About
        </p>

        {/* Headline */}
        <h2
          className="about-reveal text-2xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight text-white max-w-3xl mb-10"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          {ABOUT_DATA.headline}
        </h2>

        {/* Narrative */}
        <div className="about-reveal max-w-2xl space-y-5 mb-16">
          {ABOUT_DATA.narrative.map((p, i) => (
            <p key={i} className="text-sm sm:text-base text-neutral-400 font-light leading-[1.8]">
              {p}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="about-reveal divider mb-12" />

        {/* Pillars Grid — neon glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {ABOUT_DATA.pillars.map((pillar, i) => (
            <div key={pillar.title} className="about-reveal glass shimmer-border p-6 sm:p-8 group">
              <p className="text-[11px] font-mono text-neutral-500 mb-4 tracking-wider">
                0{i + 1}
              </p>
              <h3 className="text-lg font-medium text-white mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                {pillar.description}
              </p>
              <div className="pt-4 border-t border-white/[0.06] flex items-baseline gap-3">
                <span className="text-2xl font-mono font-medium text-neon">
                  {pillar.metric}
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  {pillar.submetric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
