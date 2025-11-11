import Hero from '../components/Hero';
import AboutGame from '../components/AboutGame';
import AILearning from '../components/AILearning';
import RADProcess from '../components/RADProcess';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutGame />
      <AILearning />
      <RADProcess />
      <Gallery />
      <Contact />
    </div>
  );
}
