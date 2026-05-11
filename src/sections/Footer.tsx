import Reveal from '../components/Reveal';

const COLUMNS = [
  {
    title: 'The Farm',
    items: ['Our Farm', 'Livestock', 'Country Chicken', 'Sericulture'],
  },
  {
    title: 'Produce',
    items: ['Country Eggs', 'Tender Coconuts', 'Seasonal Vegetables', 'Field Greens'],
  },
  {
    title: 'Visit',
    items: ['Plan Your Visit', 'Group Tours', 'Hosting & Events', 'Open Hours'],
  },
];

const EMAIL = 'manojkumar06t@gmail.com';
const PHONE_DISPLAY = '+91 83101 47887';
const PHONE_INTL = '918310147887'; // for wa.me / tel: links
const MAP_URL = 'https://maps.app.goo.gl/aXVpyNnf3tHL8iFz5';
const INSTAGRAM_URL = 'https://www.instagram.com/_manojgowda__/';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bone pt-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="font-serif text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[1] tracking-tightest text-ink">
                Anjali <span className="italic-soft text-sand-700">Farms</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-mute">
                A long love letter to the land. Country chickens, organic
                livestock, coconuts, vegetables, and traditional sericulture —
                tended slowly, in harmony with nature.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10">
                <div className="text-[11px] uppercase tracking-[0.3em] text-mute">
                  Write to us
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-3 inline-flex items-center gap-3 font-serif text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.1] tracking-tightest text-ink transition-colors duration-500 ease-smooth hover:text-sand-700"
                >
                  {EMAIL}
                  <span
                    aria-hidden
                    className="inline-block text-base transition-transform duration-500 ease-smooth group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 space-y-1 text-[13px] leading-relaxed text-mute">
                <div className="text-[11px] uppercase tracking-[0.3em] text-ink/80">
                  Reach us
                </div>
                <a
                  href={`tel:+${PHONE_INTL}`}
                  className="mt-3 block text-ink transition-colors duration-500 ease-smooth hover:text-sand-700"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-4 lg:col-start-7 sm:grid-cols-3">
            {COLUMNS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] text-mute">
                    {c.title}
                  </h4>
                  <ul className="mt-5 space-y-3">
                    {c.items.map((it) => (
                      <li key={it}>
                        <a
                          href="#"
                          className="nav-underline text-[14px] text-ink/80"
                        >
                          {it}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-3">
            <Reveal>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-mute">
                Find us
              </h4>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 block overflow-hidden rounded-[2px] shadow-soft"
                aria-label="Open Anjali Farms in Google Maps"
              >
                <iframe
                  title="Anjali Farms map"
                  loading="lazy"
                  tabIndex={-1}
                  className="pointer-events-none h-44 w-full grayscale-[0.4] transition-all duration-700 ease-smooth group-hover:grayscale-0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.3%2C12.8%2C77.7%2C13.05&amp;layer=mapnik"
                />
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[13px] leading-relaxed text-mute transition-colors duration-500 ease-smooth hover:text-ink"
              >
                Open in Google Maps
                <span aria-hidden className="inline-block">↗</span>
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="mt-24 select-none text-center font-serif text-[clamp(4rem,16vw,16rem)] leading-[0.9] tracking-tightest text-ink">
            Anjali <span className="italic-soft text-sand-700">Farms</span>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pb-10 pt-8 text-[11px] uppercase tracking-[0.3em] text-mute sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Anjali Farms</span>
          <div className="flex items-center gap-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-underline"
            >
              Instagram
            </a>
            <a
              href={`https://wa.me/${PHONE_INTL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-underline"
            >
              WhatsApp
            </a>
            <a href="#" className="nav-underline">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
