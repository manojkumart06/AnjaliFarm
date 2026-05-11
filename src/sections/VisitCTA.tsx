import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { images } from '../lib/media';

export default function VisitCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section
      id="visit"
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-ink text-bone"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={images.villageEvening}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/70"
        />
      </motion.div>

      <div className="container-x relative z-10 flex h-full flex-col justify-center">
        <Reveal>
          <span className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-bone/70">
            <span className="h-px w-8 bg-bone/40" />
            08 — Visit us
          </span>
        </Reveal>

        <SplitText
          as="h2"
          text="Experience the calm of rural living."
          emphasis={['calm', 'rural']}
          className="max-w-5xl font-serif text-[clamp(2.6rem,7vw,7.2rem)] leading-[0.98] tracking-tightest text-bone"
          stagger={0.05}
        />

        <Reveal delay={0.3}>
          <p className="mt-10 max-w-xl text-[15px] leading-[1.85] text-bone/75">
            Visit Anjali Farms to experience nature, farming traditions, fresh
            produce, and peaceful village life surrounded by open skies and
            greenery.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href="https://maps.app.goo.gl/aXVpyNnf3tHL8iFz5"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-bone px-8 py-4 text-[13px] tracking-wide text-ink transition-all duration-500 ease-smooth hover:scale-[1.03]"
            >
              Plan Your Visit
              <span className="inline-block transition-transform duration-500 ease-smooth group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-3 rounded-full border border-bone/30 px-8 py-4 text-[13px] tracking-wide text-bone transition-colors duration-500 ease-smooth hover:bg-bone/10"
            >
              See the farm
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.6}>
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container-x flex flex-wrap items-center justify-between gap-6 text-[11px] uppercase tracking-[0.3em] text-bone/60">
            <span>Open skies, open gates</span>
            <span className="hidden sm:inline">
              By appointment · Small groups welcomed
            </span>
            <span>Anjali Farms</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
