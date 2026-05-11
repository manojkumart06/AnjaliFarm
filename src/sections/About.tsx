import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { images } from '../lib/media';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['-6%', '10%']);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-bone py-32 sm:py-44"
    >
      <div className="container-x relative">
        <Reveal>
          <span className="mb-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-mute">
            <span className="h-px w-8 bg-mute/40" />
            01 — Our Farm
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SplitText
              as="h2"
              text="Built on tradition, guided by nature."
              emphasis={['tradition,', 'nature.']}
              className="font-serif text-[clamp(2rem,5.5vw,5.4rem)] leading-[1] tracking-tightest text-ink"
            />

            <Reveal delay={0.2}>
              <p className="mt-10 max-w-xl text-[15px] leading-[1.85] text-mute">
                Anjali Farms is a rural farming space built around sustainable
                living, ethical farming, and natural care for animals and land.
                Every part of the farm reflects a slower, healthier, and more
                grounded way of life rooted in tradition and harmony with
                nature.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-mute">
                From open pastures and coconut groves to the quiet rooms where
                silk is gathered, the farm holds many small practices in a
                single, unhurried rhythm — each shaped by the village around it
                and the soil beneath it.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-14 grid grid-cols-2 gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3">
                {[
                  { k: 'VIII', l: 'Practices, one rhythm' },
                  { k: '100%', l: 'Naturally raised livestock' },
                  { k: 'III', l: 'Generations of farmers' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-serif text-5xl tracking-tightest text-ink">
                      {s.k}
                    </div>
                    <div className="mt-2 text-[12px] uppercase tracking-[0.2em] text-mute">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            {/* Main image — right-aligned within the column, fills the space cleanly */}
            <motion.div
              style={{ y: y1 }}
              className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-[2px] shadow-soft"
            >
              <img
                src={images.fogField}
                alt="A pasture catching the first light of morning"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            {/* Secondary image — tucked at bottom-left so it overlaps inward,
                creating a layered editorial composition without crowding the viewport edge */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-10 left-0 aspect-[3/4] w-[46%] overflow-hidden rounded-[2px] shadow-soft"
            >
              <img
                src={images.hands}
                alt="A hand cradling fresh soil"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            {/* Soft warm halo behind the composition */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.4 }}
              className="absolute -right-4 top-8 z-[-1] h-44 w-44 rounded-full bg-sand-200/60 blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
