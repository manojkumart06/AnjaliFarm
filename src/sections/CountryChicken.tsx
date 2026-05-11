import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal, { Stagger, StaggerItem } from '../components/Reveal';
import SplitText from '../components/SplitText';
import { images } from '../lib/media';

const PRINCIPLES = [
  {
    n: '01',
    title: 'Open-air roaming',
    body: 'Our birds spend their day in open natural surroundings — scratching, foraging, and dust-bathing as they should.',
  },
  {
    n: '02',
    title: 'Honest feeding',
    body: 'Healthy feeding practices built around grains, greens, and the rhythm of the season — never accelerated growth.',
  },
  {
    n: '03',
    title: 'Quiet care',
    body: 'Small flocks, watched closely. We know our birds by sight, by sound, and by where they prefer to settle each evening.',
  },
];

export default function CountryChicken() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-sand-50 py-32 sm:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-sand-200/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-sand-300/40 blur-3xl"
      />

      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-mute">
                <span className="h-px w-8 bg-mute/40" />
                02 — Country chicken
              </span>
            </Reveal>
            <SplitText
              as="h2"
              text="Free-range country chickens raised naturally."
              emphasis={['Free-range', 'naturally.']}
              className="font-serif text-[clamp(2rem,5vw,4.6rem)] leading-[1.02] tracking-tightest text-ink"
            />
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-xl text-[15px] leading-[1.85] text-mute">
                Our country chickens are raised in open natural surroundings
                with care and healthy feeding practices. We provide naturally
                grown country chicken and farm-fresh eggs with authenticity and
                quality at the center.
              </p>
            </Reveal>

            <Stagger className="mt-12 space-y-6 border-t border-ink/10 pt-8" stagger={0.1}>
              {PRINCIPLES.map((p) => (
                <StaggerItem key={p.n}>
                  <div className="flex gap-6">
                    <span className="font-serif text-2xl tracking-tightest text-sand-600">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl tracking-tightest text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[14px] leading-[1.8] text-mute">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="relative lg:col-span-6">
            <motion.div
              style={{ y }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] shadow-soft"
            >
              <img
                src={images.chickens}
                alt="Country chickens roaming in open surroundings"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5 text-bone">
                <div className="font-serif text-xl italic-soft">Free to roam</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-bone/75">
                  Dawn — Dusk
                </div>
              </div>
            </motion.div>
            <Reveal delay={0.2}>
              <div className="absolute -bottom-10 -left-6 aspect-[3/4] w-[44%] overflow-hidden rounded-[2px] shadow-soft">
                <img
                  src={images.eggBasket}
                  alt="Basket of farm-fresh country eggs"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="absolute -right-4 top-8 hidden aspect-[3/4] w-[36%] overflow-hidden rounded-[2px] shadow-soft sm:block">
                <img
                  src={images.henGrass}
                  alt="A hen on fresh grass"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
