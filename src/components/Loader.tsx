import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 2200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bone"
        >
          {/* Top corner labels — desktop only, kept tucked at the very edges
              and hidden on mobile where they'd collide with the wordmark */}
          <div className="absolute left-0 right-0 top-12 mx-auto hidden max-w-[1320px] justify-between px-8 text-[11px] uppercase tracking-[0.4em] text-mute md:flex">
            <span>Rural India</span>
            <span>Est. 1999</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(3rem,9vw,8rem)] leading-none tracking-tightest text-ink"
            >
              Anjali <span className="italic-soft text-sand-700">Farms</span>
            </motion.div>
            {/* Mobile-only meta line beneath the wordmark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-mute md:hidden"
            >
              <span>Rural India</span>
              <span className="h-px w-6 bg-mute/40" />
              <span>Est. 1999</span>
            </motion.div>
          </div>
          <div className="absolute bottom-12 left-0 right-0 mx-auto flex max-w-[1320px] items-center justify-between px-8 text-[11px] uppercase tracking-[0.4em] text-mute">
            <span>{Math.round(progress * 100)}</span>
            <div className="mx-6 h-px flex-1 bg-ink/10">
              <motion.div
                className="h-px origin-left bg-ink"
                style={{ scaleX: progress }}
              />
            </div>
            <span>100</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
