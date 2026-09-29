import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS_DATA } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

/**
 * Skills — Neon glassmorphic domain grid
 * Deep frosted cards with glowing neon skill tags.
 */
export default function Skills() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.skill-reveal'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
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
      id="skills"
      ref={sectionRef}
      className="relative px-6 sm:px-8 lg:px-12 py-28 sm:py-40"
    >
      <div ref={contentRef} className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <p className="skill-reveal text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-6">
          Expertise
        </p>

        {/* Headline */}
        <h2
          className="skill-reveal text-2xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight text-white max-w-3xl mb-6"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Technical Stack & Expertise
        </h2>

        <p className="skill-reveal text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mb-16">
          Specialized engineering competencies spanning modern component systems,
          reactive frontends, distributed cloud architectures, and GPU-accelerated computing.
        </p>

        {/* Skills Grid — neon glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILLS_DATA.map((category, idx) => (
            <div
              key={category.category}
              className="skill-reveal glass shimmer-border p-6 sm:p-8 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                  {category.category}
                </h3>
                <span className="text-[11px] font-mono text-neutral-500">
                  0{idx + 1}
                </span>
              </div>

              <p className="text-xs text-neutral-500 font-light mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skill Tags — neon glass pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 text-xs font-mono inline-flex items-center gap-1.5 ${
                      skill.hot ? 'glass-tag text-[var(--accent)]' : 'glass-tag-muted text-neutral-400'
                    }`}
                  >
                    {skill.hot && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
