import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { images } from '../lib/media';

type Slide = {
  src: string;
  /** Optional mobile-cropped variant. Used under 768px. */
  mobile?: string;
  alt: string;
  /** Tailwind object-position class — keeps the subject in frame */
  focus?: string;
};

const SLIDES: Slide[] = [
  {
    src: images.heroSunrise,
    alt: 'Golden sunrise over rural farmland',
    focus: 'object-center',
  },
  {
    src: images.heroCoconuts,
    alt: 'Coconut palms reaching into the sky',
    focus: 'object-bottom',
  },
  {
    src: images.heroCowPortrait,
    alt: 'A native cow in quiet morning light',
    focus: 'object-center',
  },
  {
    src: images.heroFog,
    alt: 'A misty morning over the fields',
    focus: 'object-center',
  },
  {
    src: images.heroChickens,
    mobile: images.heroChickensMobile,
    alt: 'Country chickens roaming freely',
    focus: 'object-center',
  },
  {
    src: images.heroSheep,
    alt: 'Sheep on an open hillside at dusk',
    focus: 'object-center',
  },
  {
    src: images.heroHands,
    alt: 'A pair of hands cradling fresh soil',
    focus: 'object-center',
  },
];

const HOLD_MS = 7000;
const FADE_MS = 1600;
const MOBILE_BREAKPOINT = '(max-width: 768px)';

function Frame({ slide }: { slide: Slide }) {
  return (
    <picture>
      {slide.mobile && (
        <source media={MOBILE_BREAKPOINT} srcSet={slide.mobile} />
      )}
      <img
        src={slide.src}
        alt={slide.alt}
        className={`h-full w-full object-cover ${slide.focus ?? 'object-center'}`}
        loading="eager"
        decoding="async"
      />
    </picture>
  );
}

export default function HeroBackground() {
  // `current` is the fully-opaque backdrop. `incoming` fades in on top.
  // When the fade completes, `current` is set to `incoming` and `incoming` clears.
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const holdTimer = useRef<number | null>(null);
  const fadeTimer = useRef<number | null>(null);

  useEffect(() => {
    holdTimer.current = window.setTimeout(() => {
      const next = (current + 1) % SLIDES.length;

      // Preload the next image at the right viewport size
      const isMobile = window.matchMedia(MOBILE_BREAKPOINT).matches;
      const slide = SLIDES[next];
      const probe = new Image();
      probe.src = isMobile && slide.mobile ? slide.mobile : slide.src;

      setIncoming(next);
      fadeTimer.current = window.setTimeout(() => {
        setCurrent(next);
        setIncoming(null);
      }, FADE_MS);
    }, HOLD_MS);

    return () => {
      if (holdTimer.current) window.clearTimeout(holdTimer.current);
      if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    };
  }, [current]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-bone">
      {/* Single Ken Burns wrapper — both layers share one continuous zoom
          state, so swapping images can never cause a size jump */}
      <div className="ken-burns absolute inset-0">
        {/* Stable backdrop — always at full opacity, never fades */}
        <div className="absolute inset-0">
          <Frame slide={SLIDES[current]} />
        </div>

        {/* Incoming frame fades in ON TOP, so the screen is never < 100% covered */}
        {incoming !== null && (
          <motion.div
            key={incoming}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 will-change-[opacity]"
          >
            <Frame slide={SLIDES[incoming]} />
          </motion.div>
        )}
      </div>

      {/* Quiet slide indicator */}
      <div className="pointer-events-none absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {SLIDES.map((_, idx) => {
          const active = (incoming ?? current) === idx;
          return (
            <span
              key={idx}
              className={`h-px transition-all duration-1000 ease-smooth ${
                active ? 'w-10 bg-bone/90' : 'w-4 bg-bone/30'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
