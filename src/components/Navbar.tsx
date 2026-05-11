import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Farm', href: '#about' },
  { label: 'Livestock', href: '#livestock' },
  { label: 'Organic Produce', href: '#produce' },
  { label: 'Sericulture', href: '#sericulture' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24);
  });

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
      >
        <nav
          className={`relative flex w-full max-w-[1320px] items-center justify-between rounded-full px-4 py-3 transition-all duration-700 ease-smooth sm:px-6 ${
            scrolled || open
              ? 'glass shadow-soft'
              : 'bg-transparent'
          }`}
        >
          <a
            href="#home"
            className={`font-serif text-2xl tracking-tightest transition-colors duration-500 ease-smooth sm:text-[28px] ${
              scrolled || open
                ? 'text-ink'
                : 'text-bone [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]'
            }`}
          >
            Anjali <span className="italic-soft">Farms</span>
          </a>

          <ul
            className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[13px] transition-colors duration-500 ease-smooth md:flex ${
              scrolled || open
                ? 'text-ink/85'
                : 'text-bone/95 [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]'
            }`}
          >
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-underline tracking-wide">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#visit"
              className={`group hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] tracking-wide transition-all duration-500 ease-smooth hover:scale-[1.03] md:inline-flex ${
                scrolled || open
                  ? 'bg-ink text-bone hover:bg-sand-700'
                  : 'bg-bone text-ink hover:bg-bone/90'
              }`}
            >
              Explore the Farm
              <span
                aria-hidden
                className="inline-block translate-x-0 transition-transform duration-500 ease-smooth group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="grid h-10 w-10 place-content-center rounded-full md:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`h-px w-5 transition-all duration-500 ${
                    scrolled || open ? 'bg-ink' : 'bg-bone'
                  } ${open ? 'translate-y-[6px] rotate-45' : ''}`}
                />
                <span
                  className={`h-px w-5 transition-all duration-300 ${
                    scrolled || open ? 'bg-ink' : 'bg-bone'
                  } ${open ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`h-px w-5 transition-all duration-500 ${
                    scrolled || open ? 'bg-ink' : 'bg-bone'
                  } ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-bone/95 backdrop-blur-2xl" />
        <div className="relative flex h-full flex-col justify-between px-8 pb-12 pt-28">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="font-serif text-4xl tracking-tightest text-ink"
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <a
            href="#visit"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-ink py-4 text-sm text-bone"
          >
            Explore the Farm →
          </a>
        </div>
      </motion.div>
    </>
  );
}
