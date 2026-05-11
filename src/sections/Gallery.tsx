import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { images } from '../lib/media';

const ITEMS = [
  { src: images.galleryA, span: 'row-span-2', alt: 'Mist over a paddock' },
  { src: images.galleryB, span: '', alt: 'Cattle at first light' },
  { src: images.galleryC, span: '', alt: 'Open meadow' },
  { src: images.galleryD, span: 'row-span-2', alt: 'Hands gathering herbs' },
  { src: images.galleryE, span: '', alt: 'Country chicken' },
  { src: images.galleryF, span: '', alt: 'Evening pasture' },
  { src: images.galleryG, span: '', alt: 'Path through the orchard' },
  { src: images.galleryH, span: '', alt: 'A clearing in the woods' },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-sand-50 py-32 sm:py-44"
    >
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-mute">
                <span className="h-px w-8 bg-mute/40" />
                06 — Gallery
              </span>
            </Reveal>
            <SplitText
              as="h2"
              text="Moments from the farm."
              emphasis={['farm.']}
              className="font-serif text-[clamp(2rem,5vw,4.8rem)] leading-[1.02] tracking-tightest text-ink"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-[15px] leading-[1.85] text-mute">
              Quiet frames from sunrise fields, livestock, coconut groves, and
              village life — gathered between chores when the light asks to be
              remembered.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid auto-rows-[14rem] grid-cols-2 gap-4 sm:auto-rows-[16rem] md:grid-cols-3 lg:auto-rows-[18rem] lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{
                opacity: 1,
                y: 0,
                clipPath: 'inset(0 0 0% 0)',
              }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{
                duration: 1.2,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[2px] bg-sand-200 ${it.span}`}
            >
              <motion.img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute bottom-3 left-3 translate-y-2 text-[11px] uppercase tracking-[0.25em] text-bone opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                {it.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
