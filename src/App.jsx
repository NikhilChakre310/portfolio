import useSmoothScroll from './hooks/useSmoothScroll';
import NoiseOverlay from './components/react-bits/NoiseOverlay';
import Navbar from './components/ui/Navbar';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-[#060610] text-neutral-200 font-sans">
      {/* Film grain */}
      <NoiseOverlay opacity={0.015} />

      {/* ===== NEON FLOATING ORBS ===== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Large cyan orb — top right */}
        <div
          className="neon-orb neon-orb-cyan float-slow"
          style={{ width: '420px', height: '420px', top: '-8%', right: '-5%', opacity: 0.6 }}
        />
        {/* Green orb — mid left */}
        <div
          className="neon-orb neon-orb-green float-medium"
          style={{ width: '300px', height: '300px', top: '35%', left: '-6%', opacity: 0.5 }}
        />
        {/* Blue orb — bottom center */}
        <div
          className="neon-orb neon-orb-blue float-slow"
          style={{ width: '350px', height: '350px', bottom: '5%', left: '30%', opacity: 0.4 }}
        />
        {/* Pink orb — right middle */}
        <div
          className="neon-orb neon-orb-pink float-medium"
          style={{ width: '280px', height: '280px', top: '55%', right: '-3%', opacity: 0.35 }}
        />
        {/* Purple orb — top left */}
        <div
          className="neon-orb neon-orb-purple float-fast"
          style={{ width: '200px', height: '200px', top: '12%', left: '15%', opacity: 0.3 }}
        />
        {/* Small cyan orb — bottom left */}
        <div
          className="neon-orb neon-orb-cyan float-fast"
          style={{ width: '160px', height: '160px', bottom: '20%', left: '5%', opacity: 0.4 }}
        />

        {/* Decorative floating glass blobs */}
        <div
          className="glass-blob float-slow"
          style={{ width: '80px', height: '80px', top: '8%', right: '12%' }}
        />
        <div
          className="glass-blob float-medium"
          style={{ width: '50px', height: '50px', top: '25%', left: '8%' }}
        />
        <div
          className="glass-blob float-fast"
          style={{ width: '35px', height: '35px', bottom: '30%', right: '8%' }}
        />

        {/* Decorative neon rings */}
        <div
          className="neon-ring float-medium hidden lg:flex"
          style={{ position: 'absolute', width: '60px', height: '60px', top: '15%', right: '18%' }}
        >
          <span className="text-[var(--accent)] text-lg font-light">+</span>
        </div>
        <div
          className="neon-square float-slow hidden lg:flex"
          style={{ position: 'absolute', width: '45px', height: '45px', bottom: '25%', left: '12%' }}
        >
          <span className="text-[var(--accent-blue)] text-sm">✕</span>
        </div>
        <div
          className="neon-ring float-fast hidden lg:flex"
          style={{ position: 'absolute', width: '40px', height: '40px', top: '60%', right: '6%' }}
        >
          <span className="text-[var(--accent-pink)] text-xs">✦</span>
        </div>

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#060610_80%)] opacity-50" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="portfolio-root" className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
