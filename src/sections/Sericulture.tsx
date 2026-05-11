import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { images } from '../lib/media';

export default function Sericulture() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['-6%', '8%']);

  return (
    <section
      id="sericulture"
      ref={ref}
      className="relative overflow-hidden bg-bone py-32 sm:py-44"
    >
      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="relative order-2 lg:order-1 lg:col-span-6">
            <motion.div
              style={{ y: y1 }}
              className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-[2px] shadow-soft"
            >
              <img
                src={images.silkThreads}
                alt="Soft silk threads drawn by hand"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute -right-2 bottom-0 aspect-[3/4] w-[50%] overflow-hidden rounded-[2px] shadow-soft"
            >
              <img
                src={images.mulberryLeaf}
                alt="Mulberry leaves used in sericulture"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.3 }}
              className="absolute -left-10 top-12 z-[-1] h-48 w-48 rounded-full bg-sand-200/70 blur-3xl"
            />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <Reveal>
              <span className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-mute">
                <span className="h-px w-8 bg-mute/40" />
                04 — Sericulture
              </span>
            </Reveal>
            <SplitText
              as="h2"
              text="Preserving the art of sericulture."
              emphasis={['art', 'sericulture.']}
              className="font-serif text-[clamp(2rem,5vw,4.6rem)] leading-[1.02] tracking-tightest text-ink"
            />
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-xl text-[15px] leading-[1.85] text-mute">
                Anjali Farms also nurtures traditional sericulture practices
                with dedication and care. The process reflects patience,
                craftsmanship, and deep agricultural heritage.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
                {[
                  { k: 'Mulberry', l: 'Hand-picked leaves' },
                  { k: 'Cocoon', l: 'Naturally formed' },
                  { k: 'Thread', l: 'Reeled in small batches' },
                ].map((s) => (
                  <div key={s.k}>
                    <div className="font-serif text-xl tracking-tightest text-ink italic-soft">
                      {s.k}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-mute">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="mt-12 overflow-hidden rounded-[2px] shadow-soft">
                <motion.img
                  src={images.silkFabric}
                  alt="Folded silk fabric in warm light"
                  loading="lazy"
                  className="h-44 w-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
