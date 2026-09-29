import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

gsap.registerPlugin(ScrollTrigger);

/**
 * Projects — Neon glassmorphic stacked cards
 * Deep frosted panels with vibrant neon accents, shimmer borders, and glass meta pills.
 */
export default function Projects() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.project-reveal'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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
      id="projects"
      ref={sectionRef}
      className="relative px-6 sm:px-8 lg:px-12 py-28 sm:py-40"
    >
      <div ref={contentRef} className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <p className="project-reveal text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-6">
          Selected Work
        </p>

        {/* Headline */}
        <h2
          className="project-reveal text-2xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight text-white max-w-3xl mb-16"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Projects & Systems
        </h2>

        {/* Project List — neon glass cards */}
        <div className="space-y-6">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className="project-reveal glass shimmer-border p-6 sm:p-8 lg:p-10 group"
            >
              {/* Meta pills */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="glass-tag-muted px-3 py-1 text-[11px] font-mono text-neutral-400">
                  0{idx + 1}
                </span>
                <span className="glass-tag-muted px-3 py-1 text-[11px] font-mono text-neutral-400">
                  {project.category}
                </span>
                <span className="glass-tag-muted px-3 py-1 text-[11px] font-mono text-neutral-400">
                  {project.year}
                </span>
                {project.featured && (
                  <span className="glass-tag px-3 py-1 text-[11px] font-mono text-[var(--accent)] inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-3xl font-medium text-white mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6 max-w-3xl">
                {project.overview}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="glass-tag-muted px-2.5 py-1 text-[11px] font-mono text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats & Links */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/[0.06]">
                <div className="flex gap-8">
                  {project.stats.map((st) => (
                    <div key={st.label}>
                      <p className="text-[10px] font-mono uppercase text-neutral-500 mb-1">
                        {st.label}
                      </p>
                      <p className="text-base font-mono font-medium text-white">
                        {st.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid flex items-center gap-2 px-5 py-2 text-xs font-medium"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass flex items-center justify-center w-9 h-9 !p-0"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
