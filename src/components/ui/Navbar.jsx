import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

/**
 * Navbar — Neon glassmorphic floating navigation
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    if (window.lenis) {
      window.lenis.scrollTo(href, { offset: -40, duration: 1.2 });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNav(e, '#hero')}
            className="flex items-center gap-2.5 group"
          >
            <span className="glow-dot shrink-0 group-hover:scale-125 transition-transform duration-300" />
            <span className="text-sm font-medium tracking-widest text-white/90 uppercase">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
          </a>

          {/* Desktop Nav — neon glass pill */}
          <nav className="hidden md:flex items-center gap-0.5 glass-pill px-1.5 py-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-4 py-1.5 rounded-full text-[13px] font-light tracking-wide text-neutral-400 hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="hidden md:flex btn-glass items-center gap-2 px-5 py-2 text-[13px] font-light"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
            <span>Let's Talk</span>
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-xl glass-subtle text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#060610]/80 backdrop-blur-2xl md:hidden flex flex-col justify-center px-8"
          onClick={() => setMobileOpen(false)}
        >
          <nav className="flex flex-col gap-1" onClick={(e) => e.stopPropagation()}>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="py-4 px-4 text-2xl font-light text-neutral-300 hover:text-[var(--accent)] hover:bg-white/[0.03] rounded-2xl transition-all border-b border-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="mt-4 py-3.5 btn-solid text-sm font-medium text-center flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
