import { motion } from 'framer-motion';
import { useRef } from 'react';
import HeroBackground from '../components/HeroBackground';
import SplitText from '../components/SplitText';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-bone text-bone"
    >
      <div className="absolute inset-0">
        <HeroBackground />
      </div>

      <div className="container-x relative z-10 flex h-full flex-col justify-end pb-24 pt-32 sm:pb-32">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-bone/70"
        >
          <span className="h-px w-8 bg-bone/40" />
          Anjali Farms — Rural Stewardship
        </motion.span>

        <SplitText
          as="h1"
          text="Rooted in nature, raised with care."
          emphasis={['nature,', 'nature', 'care.', 'care']}
          emphasisClassName="italic-soft inline-block text-sand-200"
          className="font-serif text-[clamp(2.6rem,8vw,7.5rem)] font-normal leading-[0.98] tracking-tightest text-bone [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]"
          stagger={0.06}
          delay={0.4}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-xl text-[15px] leading-relaxed text-bone/85 [text-shadow:0_1px_18px_rgba(0,0,0,0.55)]"
        >
          At Anjali Farms, we nurture country chickens, organic livestock,
          natural vegetables, coconuts, and traditional sericulture with care,
          sustainability, and deep respect for the land.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-3.5 text-[13px] tracking-wide text-ink transition-all duration-500 ease-smooth hover:scale-[1.03]"
          >
            Explore the Farm
            <span className="inline-block transition-transform duration-500 ease-smooth group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#livestock"
            className="group inline-flex items-center gap-3 rounded-full border border-bone/30 px-7 py-3.5 text-[13px] tracking-wide text-bone transition-colors duration-500 ease-smooth hover:bg-bone/10"
          >
            Meet the livestock
            <span className="inline-block transition-transform duration-500 ease-smooth group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
