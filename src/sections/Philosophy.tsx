import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { images } from '../lib/media';

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink text-bone"
    >
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 opacity-[0.55] will-change-transform"
      >
        <img
          src={images.sunriseField}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70"
        />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.65)_85%)]"
      />

      <div className="container-x relative py-40 sm:py-56">
        <Reveal>
          <span className="mb-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-bone/60">
            <span className="h-px w-8 bg-bone/30" />
            07 — Philosophy
          </span>
        </Reveal>

        <div className="max-w-5xl">
          <SplitText
            as="h2"
            text="Nature teaches balance."
            emphasis={['Nature', 'balance.']}
            className="font-serif text-[clamp(2.2rem,6.4vw,6.6rem)] leading-[1] tracking-tightest text-bone"
            stagger={0.05}
          />

          <Reveal delay={0.3}>
            <p className="mt-12 max-w-2xl text-[17px] leading-[1.85] text-bone/75">
              We believe farming is more than production — it is a relationship
              between people, animals, land, and time. At Anjali Farms, we
              embrace a slower and more meaningful approach to living through
              nature.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-16 flex items-center gap-5">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
                  alt="Anjali Farms — farmer"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <div>
                <div className="font-serif text-lg italic-soft text-bone">
                  — From the family at Anjali Farms
                </div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-bone/55">
                  Three generations of farmers
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
