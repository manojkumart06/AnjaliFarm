import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  fadeDuration?: number;
};

/**
 * Looping background video with edge fades.
 * Uses requestAnimationFrame to monitor currentTime and crossfade
 * opacity near loop boundaries for a seamless cinematic feel.
 */
export default function CinematicVideo({
  src,
  poster,
  className = '',
  overlayClassName = '',
  fadeDuration = 1.0,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let raf = 0;
    const tick = () => {
      if (!video) return;
      const t = video.currentTime;
      const d = video.duration || 0;
      if (d > 0) {
        // Fade in at start
        const inFade = Math.min(1, t / fadeDuration);
        // Fade out near end
        const outFade = Math.min(1, Math.max(0, (d - t) / fadeDuration));
        const o = Math.min(inFade, outFade);
        setOpacity(o);

        // Manual seamless loop reset slightly before end
        if (d - t < 0.05) {
          try {
            video.currentTime = 0;
            void video.play();
          } catch {
            /* noop */
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const onCanPlay = () => {
      setLoaded(true);
      void video.play().catch(() => {});
      raf = requestAnimationFrame(tick);
    };

    video.addEventListener('canplay', onCanPlay);
    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener('canplay', onCanPlay);
    };
  }, [fadeDuration]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: loaded ? 0 : 1,
            transition: 'opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      )}
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        preload="auto"
        loop={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity,
          transition: 'opacity 240ms linear',
        }}
      />
      <div
        className={`absolute inset-0 pointer-events-none ${overlayClassName}`}
      />
    </div>
  );
}
