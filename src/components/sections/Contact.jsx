import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '../ui/Icons';

gsap.registerPlugin(ScrollTrigger);

/**
 * Contact — Neon glassmorphic split layout
 * Deep frosted form panel with glowing neon inputs and accent social icons.
 */
export default function Contact() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.contact-reveal'),
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

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1200);
  };

  const socials = [
    { name: 'GitHub', href: PERSONAL_INFO.github, icon: <GithubIcon className="w-4 h-4" /> },
    { name: 'LinkedIn', href: PERSONAL_INFO.linkedin, icon: <LinkedinIcon className="w-4 h-4" /> },
    { name: 'Twitter', href: PERSONAL_INFO.twitter, icon: <TwitterXIcon className="w-4 h-4" /> },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 sm:px-8 lg:px-12 py-28 sm:py-40"
    >
      <div ref={contentRef} className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <p className="contact-reveal text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-6">
          Contact
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Info */}
          <div className="contact-reveal">
            <h2
              className="text-2xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight text-white mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Let's build something together.
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-10">
              Whether you're looking to hire a full-stack engineer, build scalable architectures,
              or collaborate on innovative experiences — I'd love to hear from you.
            </p>

            {/* Email — glass panel */}
            <div className="glass-subtle p-4 flex items-center justify-between gap-3 mb-8">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center glass-tag shrink-0">
                  <span className="text-sm">✉</span>
                </div>
                <span className="text-sm font-mono text-neutral-300 truncate">{PERSONAL_INFO.email}</span>
              </div>
              <button
                onClick={handleCopy}
                className="glass-tag flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-neutral-400 hover:text-[var(--accent)] cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-[var(--accent)]" />
                    <span className="text-[var(--accent)]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Status */}
            <div className="space-y-3 mb-10">
              <p className="text-xs font-mono text-neutral-500 flex items-center gap-2">
                📍 {PERSONAL_INFO.location}
              </p>
              <p className="text-xs font-mono text-neutral-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                Open for opportunities
              </p>
            </div>

            {/* Social Links — neon glass circles */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-subtle flex items-center justify-center w-11 h-11 !rounded-full text-neutral-400 hover:text-[var(--accent)] hover:border-[var(--border-glass-hover)] transition-all duration-300"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
              {PERSONAL_INFO.resumeUrl && (
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass flex items-center gap-2 px-5 py-2.5 text-xs font-mono"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Right — Neon Glass Form */}
          <div className="contact-reveal">
            <div className="glass shimmer-border p-6 sm:p-10">
              <h3 className="text-xl font-medium text-white mb-2">Send a Message</h3>
              <p className="text-sm text-neutral-500 font-light mb-8">
                I'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] font-mono uppercase text-neutral-500 mb-2 tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="glass-input w-full px-4 py-3.5 font-mono text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-mono uppercase text-neutral-500 mb-2 tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="glass-input w-full px-4 py-3.5 font-mono text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-mono uppercase text-neutral-500 mb-2 tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="glass-input w-full px-4 py-3.5 font-mono text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn-solid w-full sm:w-auto px-8 py-3.5 text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <Check className="w-4 h-4 text-[var(--accent)]" />
                      <span className="text-[#060610]">Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <p className="text-xs font-mono text-[var(--accent)] flex items-center gap-1.5 mt-2">
                    <Check className="w-3.5 h-3.5" />
                    Thank you! I'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-28 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
          <p>Built with React · Vite · GSAP</p>
        </footer>
      </div>
    </section>
  );
}
