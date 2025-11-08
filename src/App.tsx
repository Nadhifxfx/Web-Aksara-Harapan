import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import AboutGame from './components/AboutGame';
import AILearning from './components/AILearning';
import RADProcess from './components/RADProcess';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar scrolled={scrolled} />
      <Hero />
      <AboutGame />
      <AILearning />
      <RADProcess />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
