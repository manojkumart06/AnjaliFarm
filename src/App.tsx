import Grain from './components/Grain';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import { useLenis } from './lib/smoothScroll';
import About from './sections/About';
import CoconutVegetable from './sections/CoconutVegetable';
import CountryChicken from './sections/CountryChicken';
import Footer from './sections/Footer';
import Gallery from './sections/Gallery';
import Hero from './sections/Hero';
import Livestock from './sections/Livestock';
import Philosophy from './sections/Philosophy';
import Sericulture from './sections/Sericulture';
import VisitCTA from './sections/VisitCTA';

export default function App() {
  useLenis();

  return (
    <div className="relative bg-bone text-ink">
      <Loader />
      <Grain />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <CountryChicken />
        <Livestock />
        <Sericulture />
        <CoconutVegetable />
        <Gallery />
        <Philosophy />
        <VisitCTA />
      </main>

      <Footer />
    </div>
  );
}
