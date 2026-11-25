import { useState, useEffect } from 'react';
import { motion, MotionConfig, useMotionValue, useSpring } from 'framer-motion';
import {
  profile,
  navLinks,
  summary,
  languages,
  primarySkills,
  skillGroups,
  experience,
  projects,
  education,
  certifications,
  isPrimary,
} from './data';

/* ---------- Small helpers ---------- */

const Icon = ({ path, className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
);

const ICONS = {
  github:
    'M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z',
  linkedin:
    'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z',
  mail: 'M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5L12 11.6 19.8 6H4.2ZM20 7.9l-7.4 5.3a1 1 0 0 1-1.2 0L4 7.9V18h16V7.9Z',
  phone:
    'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z',
  download: 'M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1ZM5 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z',
  pin: 'M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z',
};

const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const TechChips = ({ items, className = '' }) => (
  <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Technologies">
    {items.map((t) => (
      <li key={t} className={isPrimary(t) ? 'chip chip-primary' : 'chip'}>
        {t}
      </li>
    ))}
  </ul>
);

/* ---------- Custom cursor (desktop with a mouse only) ---------- */

function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 500, damping: 28 });
  const ringY = useSpring(y, { stiffness: 500, damping: 28 });
  const dotX = useSpring(x, { stiffness: 800, damping: 35 });
  const dotY = useSpring(y, { stiffness: 800, damping: 35 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-6 h-6 -ml-3 -mt-3 rounded-full border-2 border-accent pointer-events-none z-50 cursor-fx"
        style={{ x: ringX, y: ringY }}
      />
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-accent pointer-events-none z-50 cursor-fx"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
}

/* ---------- App ---------- */

function App() {
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync the theme class and remember the choice
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch {
      /* storage unavailable: ignore */
    }
  }, [darkMode]);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  const linkClass = 'hover:text-accent transition text-body';
  const sectionClass = 'py-16 sm:py-20 px-4 sm:px-6 mx-auto';

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-page text-body min-h-screen font-sans relative overflow-x-hidden transition-colors duration-300">
        <CustomCursor />

        {/* Navbar */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-label="Main"
          className="fixed top-0 w-full z-40 bg-nav backdrop-blur-md border-b border-line px-4 sm:px-8 h-16 flex justify-between items-center shadow-sm"
        >
          <a href="#top" className="text-accent font-bold text-lg sm:text-xl tracking-wide">
            {profile.name}
          </a>

          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden lg:flex gap-6 text-sm font-semibold">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-pressed={darkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="bg-soft text-accent px-3.5 py-1.5 rounded-full text-xs font-bold border border-line shadow-sm transition"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden text-xl w-9 h-9 flex items-center justify-center"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </motion.nav>

        {/* Mobile / tablet menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="fixed top-16 left-0 w-full bg-page border-b border-line p-6 flex flex-col gap-4 z-30 lg:hidden shadow-xl"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-body font-semibold py-1"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}

        {/* Hero */}
        <motion.header
          id="top"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-16 bg-gradient-to-b from-soft via-page to-page"
        >
          <p className="chip chip-primary mb-5 text-sm">Java · Spring Boot · REST APIs</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-accent mb-3">{profile.name}</h1>
          <p className="text-xl sm:text-2xl font-semibold mb-4">{profile.title}</p>
          <p className="text-muted text-base sm:text-lg max-w-2xl mb-8">{profile.tagline}</p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 w-full sm:w-auto px-6">
            <a href="#projects" className="btn btn-primary w-full sm:w-auto">
              View Projects
            </a>
            <a href={profile.resume} download={profile.resumeFile} className="btn btn-outline w-full sm:w-auto">
              <Icon path={ICONS.download} /> Download Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline w-full sm:w-auto"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Icon path={ICONS.linkedin} /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline w-full sm:w-auto"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Icon path={ICONS.github} /> GitHub
            </a>
          </div>
        </motion.header>

        <main>
          {/* About */}
          <section id="about" className={`${sectionClass} max-w-4xl`}>
            <Reveal className="card glow-box p-6 sm:p-8 bg-soft">
              <h2 className="section-title text-xl sm:text-2xl mb-4">About Me</h2>
              <div className="space-y-4 leading-relaxed text-sm sm:text-base">
                {summary.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-line">
                <h3 className="font-semibold mb-3 text-sm">Languages</h3>
                <ul className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <li key={l.name} className="chip">
                      {l.name} · {l.level}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </section>

          {/* Skills */}
          <section id="skills" className={`${sectionClass} max-w-6xl`}>
            <h2 className="section-title text-2xl sm:text-3xl mb-10 justify-center">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {primarySkills.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.08} className="card glow-box p-6 border-2 border-accent">
                  <p className="text-xs font-semibold text-muted mb-1">Primary skill</p>
                  <h3 className="text-2xl font-extrabold text-accent mb-2">{s.name}</h3>
                  <p className="text-sm text-muted mb-4">{s.desc}</p>
                  <TechChips items={s.related} />
                </Reveal>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((g, i) => (
                <Reveal key={g.title} delay={i * 0.05} className="card glow-box p-6">
                  <h3 className="text-accent font-bold mb-3 text-base">{g.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item} className={g.primary?.includes(item) ? 'chip chip-primary' : 'chip'}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className={`${sectionClass} max-w-5xl`}>
            <h2 className="section-title text-2xl sm:text-3xl mb-10 justify-center">Professional Experience</h2>

            <Reveal className="card glow-box border-l-4 border-l-accent p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{experience.role}</h3>
                  <p className="text-accent font-semibold text-sm sm:text-base">{experience.company}</p>
                </div>
                <span className="text-xs sm:text-sm bg-soft px-3 py-1 rounded text-accent font-medium">
                  {experience.period}
                </span>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Project: {experience.project}</h4>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  {experience.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              <TechChips items={experience.tech} />
            </Reveal>
          </section>

          {/* Projects */}
          <section id="projects" className={`${sectionClass} max-w-6xl`}>
            <h2 className="section-title text-2xl sm:text-3xl mb-10 justify-center">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 0.08} className="card glow-box p-6 flex flex-col">
                  {p.tag && <p className="text-xs font-semibold text-accent mb-1">{p.tag}</p>}
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted mb-3">{p.desc}</p>
                  <ul className="space-y-1.5 text-sm list-disc pl-5 mb-5">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <TechChips items={p.tech} className="mt-auto" />
                </Reveal>
              ))}
            </div>

            <p className="text-center text-sm text-muted mt-8">
              More code on{' '}
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-accent font-semibold underline">
                GitHub
              </a>
              .
            </p>
          </section>

          {/* Education & Certifications */}
          <div className={`${sectionClass} max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10`}>
            <section id="education">
              <h2 className="section-title text-xl sm:text-2xl mb-6">Education</h2>
              <Reveal className="card glow-box p-6">
                <h3 className="font-bold text-base sm:text-lg">{education.degree}</h3>
                <p className="text-accent text-sm mt-1 font-semibold">{education.school}</p>
                <p className="text-muted text-sm mt-2">
                  {education.year} · CGPA {education.cgpa}
                </p>
              </Reveal>
            </section>

            <section id="certifications">
              <h2 className="section-title text-xl sm:text-2xl mb-6">Certifications</h2>
              <Reveal className="card glow-box p-6">
                <ul className="divide-y divide-line">
                  {certifications.map((c) => (
                    <li key={c.name} className="py-3 first:pt-0 last:pb-0">
                      <h3 className="font-semibold text-sm">{c.name}</h3>
                      <p className="text-accent text-xs font-medium">{c.issuer}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>
          </div>

          {/* Contact */}
          <section id="contact" className={`${sectionClass} max-w-4xl text-center`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-4">Let's Connect</h2>
            <p className="text-muted mb-8 text-sm sm:text-base">
              Open to Java full stack and backend opportunities. Reach out by email or phone, or connect online.
            </p>

            <Reveal className="card glow-box p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-left max-w-2xl mx-auto">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-accent transition break-all">
                <Icon path={ICONS.mail} className="w-5 h-5 shrink-0 text-accent" /> {profile.email}
              </a>
              <a href={profile.phoneHref} className="flex items-center gap-3 hover:text-accent transition">
                <Icon path={ICONS.phone} className="w-5 h-5 shrink-0 text-accent" /> {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-accent transition"
              >
                <Icon path={ICONS.linkedin} className="w-5 h-5 shrink-0 text-accent" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-accent transition"
              >
                <Icon path={ICONS.github} className="w-5 h-5 shrink-0 text-accent" /> GitHub
              </a>
              <span className="flex items-center gap-3 sm:col-span-2">
                <Icon path={ICONS.pin} className="w-5 h-5 shrink-0 text-accent" /> {profile.location}
              </span>
            </Reveal>

            <a href={profile.resume} download={profile.resumeFile} className="btn btn-primary mt-8">
              <Icon path={ICONS.download} /> Download Resume
            </a>
          </section>
        </main>

        <footer className="py-8 text-center text-muted text-xs sm:text-sm border-t border-line">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
