import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { images } from '../lib/media';

const ANIMALS = [
  {
    name: 'Cows & cattle',
    binomial: 'Bos indicus',
    img: images.cowMorning,
    portrait: images.cowPortrait,
    body: 'Native cattle move at their own pace across open pasture. We milk by hand at sunrise and let the herd rest in shade through the heat of the day.',
    note: 'Native breeds · pasture raised',
  },
  {
    name: 'Sheep',
    binomial: 'Ovis aries',
    img: images.sheepHill,
    portrait: images.sheepPair,
    body: 'Small heritage flocks rotate gently across the grasslands. The land rests as they move, and the grass returns thicker for the next pass.',
    note: 'Rotational grazing',
  },
];

export default function Livestock() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      id="livestock"
      ref={ref}
      className="relative overflow-hidden bg-ink py-32 text-bone sm:py-44"
    >
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
      >
        <img
          src={images.villageEvening}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-bone/60">
              <span className="h-px w-8 bg-bone/30" />
              03 — Cows & livestock
            </span>
          </Reveal>
          <SplitText
            as="h2"
            text="Cared for with patience and respect."
            emphasis={['patience', 'respect.']}
            className="font-serif text-[clamp(2rem,5.4vw,5.2rem)] leading-[1.02] tracking-tightest text-bone"
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.85] text-bone/65">
              Our cows, cattle, and sheep are raised in peaceful surroundings
              with a focus on natural care and healthy living. The farm
              embraces ethical livestock practices inspired by traditional
              rural life.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 space-y-32">
          {ANIMALS.map((a, i) => (
            <div
              key={a.name}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="group relative aspect-[16/10] overflow-hidden rounded-[2px]">
                    <motion.img
                      src={a.img}
                      alt={a.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-bone">
                      <div>
                        <div className="font-serif text-3xl tracking-tightest">
                          {a.name}
                        </div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-bone/70 italic-soft">
                          {a.binomial}
                        </div>
                      </div>
                      <div className="hidden text-[11px] uppercase tracking-[0.3em] text-bone/70 sm:block">
                        0{i + 1} / 02
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5">
                <Reveal delay={0.15}>
                  <div className="mb-6 aspect-[4/5] w-32 overflow-hidden rounded-[2px]">
                    <img
                      src={a.portrait}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.25}>
                  <p className="font-serif text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.25] tracking-tightest text-bone">
                    {a.body}
                  </p>
                </Reveal>
                <Reveal delay={0.4}>
                  <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-bone/15 bg-bone/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-bone/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-sand-300" />
                    {a.note}
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
