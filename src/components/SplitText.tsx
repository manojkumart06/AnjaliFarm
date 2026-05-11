import { motion, useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  emphasis?: string[];
  emphasisClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  duration?: number;
};

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  emphasis = [],
  emphasisClassName = 'italic-soft inline-block text-sand-700',
  as = 'h1',
  duration = 1.1,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const Tag = motion[as] as typeof motion.h1;

  const words = useMemo(() => text.split(' '), [text]);
  const emphasisSet = useMemo(
    () => new Set(emphasis.map((e) => e.toLowerCase().replace(/[.,!?]/g, ''))),
    [emphasis],
  );

  return (
    <div ref={ref} className="inline-block">
      <Tag
        className={className}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => {
          const clean = word.toLowerCase().replace(/[.,!?]/g, '');
          const isEmphasis = emphasisSet.has(clean);
          return (
            <span
              key={`${word}-${i}`}
              className="inline-block overflow-hidden align-baseline"
              style={{ marginRight: '0.28em', paddingBottom: '0.1em' }}
            >
              <motion.span
                className={isEmphasis ? emphasisClassName : 'inline-block'}
                variants={{
                  hidden: { y: '110%', opacity: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: { duration, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
