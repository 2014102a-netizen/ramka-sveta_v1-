import './index.css';
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Affirmations from './components/Affirmations';
import Stories from './components/Stories';
import Manifesto from './components/Manifesto';
import Gallery from './components/Gallery';
import FounderQuote from './components/FounderQuote';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Hero />
      <PainPoints />
      <Affirmations />
      <Stories />
      <Manifesto />
      <Gallery />
      <FounderQuote />
      <Quiz />
      <Footer />
    </main>
  );
};

export default App;
