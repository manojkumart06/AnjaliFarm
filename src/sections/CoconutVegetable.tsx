import { motion } from 'framer-motion';
import Reveal, { Stagger, StaggerItem } from '../components/Reveal';
import SplitText from '../components/SplitText';
import { images } from '../lib/media';

const PRODUCE = [
  {
    name: 'Tender coconuts',
    season: 'Year round',
    img: images.coconutFresh,
    blurb:
      'Hand-cut from our own trees, brought down the same morning they are picked.',
  },
  {
    name: 'Coconut grove harvest',
    season: 'Each cycle',
    img: images.coconutTrees,
    blurb:
      'Tall, wind-moved palms tended without chemicals — coconuts, husk, and oil from the same soil.',
  },
  {
    name: 'Seasonal vegetables',
    season: 'By the season',
    img: images.vegetables,
    blurb:
      'Naturally grown leaf greens, gourds, and roots from beds that follow the calendar of the land.',
  },
  {
    name: 'Field greens & herbs',
    season: 'Monsoon — Winter',
    img: images.greens,
    blurb:
      'Curry leaf, drumstick, tulsi and country greens — picked at peak, carried in shade.',
  },
];

export default function CoconutVegetable() {
  return (
    <section id="produce" className="relative bg-bone py-32 sm:py-44">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-mute">
                <span className="h-px w-8 bg-mute/40" />
                05 — Coconut & vegetables
              </span>
            </Reveal>
            <SplitText
              as="h2"
              text="Fresh from the earth."
              emphasis={['earth.']}
              className="font-serif text-[clamp(2rem,5vw,4.8rem)] leading-[1.02] tracking-tightest text-ink"
            />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-[15px] leading-[1.85] text-mute">
                From naturally grown vegetables to fresh coconuts harvested from
                our trees, every product reflects our commitment to clean,
                sustainable farming and natural nourishment.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href="#visit"
              className="group inline-flex items-center gap-3 rounded-full border border-ink/15 px-5 py-3 text-[12px] uppercase tracking-[0.25em] text-ink transition-colors duration-500 ease-smooth hover:bg-ink hover:text-bone"
            >
              View the harvest
              <span className="inline-block transition-transform duration-500 ease-smooth group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>

        <Stagger
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.12}
        >
          {PRODUCE.map((p) => (
            <StaggerItem key={p.name}>
              <motion.div
                whileHover="hover"
                className="group flex h-full flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-sand-100">
                  <motion.img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover"
                  />
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                  />
                  <motion.div
                    variants={{
                      hover: { y: 0, opacity: 1 },
                    }}
                    initial={{ y: 16, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-5 left-5 text-bone"
                  >
                    <span className="text-[11px] uppercase tracking-[0.3em]">
                      Fresh today →
                    </span>
                  </motion.div>
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl tracking-tightest text-ink">
                    {p.name}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-mute">
                    {p.season}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-[1.8] text-mute">
                  {p.blurb}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
