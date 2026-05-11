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
              <form className="mt-10 flex max-w-md items-center overflow-hidden rounded-full border border-ink/15 bg-bone p-1.5 shadow-soft">
                <input
                  type="email"
                  placeholder="Stay close to the farm — your email"
                  className="flex-1 bg-transparent px-5 py-3 text-[13px] tracking-wide text-ink placeholder-mute/70 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-ink px-5 py-3 text-[12px] uppercase tracking-[0.25em] text-bone transition-all duration-500 ease-smooth hover:bg-sand-700"
                >
                  Subscribe
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 space-y-1 text-[13px] leading-relaxed text-mute">
                <div className="text-[11px] uppercase tracking-[0.3em] text-ink/80">
                  Reach us
                </div>
                <div className="mt-3">hello@anjalifarms.in</div>
                <div>+91 98000 00000</div>
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
              <div className="mt-5 overflow-hidden rounded-[2px] shadow-soft">
                <iframe
                  title="Anjali Farms map"
                  loading="lazy"
                  className="h-44 w-full grayscale-[0.4]"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.3%2C12.8%2C77.7%2C13.05&amp;layer=mapnik"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-[13px] leading-relaxed text-mute">
                Anjali Farms,
                <br /> A quiet village,
                <br /> South India.
              </p>
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
            <a href="#" className="nav-underline">
              Instagram
            </a>
            <a href="#" className="nav-underline">
              YouTube
            </a>
            <a href="#" className="nav-underline">
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
