import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

/**
 * Experience — Glassmorphic timeline
 * Frosted glass cards with glowing timeline markers.
 */
export default function Experience() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.exp-reveal'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
      id="experience"
      ref={sectionRef}
      className="relative px-6 sm:px-8 lg:px-12 py-28 sm:py-40"
    >
      {/* Ambient orb */}
      <div
        className="ambient-orb ambient-orb-accent"
        style={{ width: '25vw', height: '25vh', top: '50%', left: '-8%', opacity: 0.12 }}
      />

      <div ref={contentRef} className="max-w-4xl mx-auto relative z-10">
        {/* Label */}
        <p className="exp-reveal text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-6">
          Experience
        </p>

        {/* Headline */}
        <h2
          className="exp-reveal text-2xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight text-white mb-16"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Career Journey
        </h2>

        {/* Timeline with glass cards */}
        <div className="relative ml-4 pl-8 border-l border-white/[0.08]">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.company} className="exp-reveal relative pb-12 last:pb-0 group">
              {/* Glowing timeline dot */}
              <div className="absolute -left-[37px] top-2 w-3 h-3 rounded-full border-2 border-[var(--accent)] bg-[#0a0a0a] group-hover:bg-[var(--accent)] transition-all duration-300 shadow-[0_0_10px_var(--accent-glow)] group-hover:shadow-[0_0_16px_var(--accent)]" />

              {/* Glass card */}
              <div className="glass shimmer-border p-6 sm:p-8">
                {/* Period pill */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="glass-tag px-3 py-1 text-[11px] font-mono font-medium text-[var(--accent)]">
                    {exp.period}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {exp.location}
                  </span>
                </div>

                {/* Role */}
                <h3 className="text-lg sm:text-xl font-medium text-white mb-1 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {exp.role}
                </h3>

                <p className="text-sm font-mono text-neutral-400 mb-4">
                  {exp.company}
                </p>

                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-5">
                  {exp.summary}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400 font-light">
                      <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2 shrink-0 shadow-[0_0_4px_var(--accent)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech — glass tags */}
                <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="glass-tag-muted px-2.5 py-1 text-[11px] font-mono text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
