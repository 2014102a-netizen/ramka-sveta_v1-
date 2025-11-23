import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Affirmations from './components/Affirmations';
import Gallery from './components/Gallery';
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

  // Client-side only mounting check
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Hero />
      <Affirmations />
      <Gallery />
      <Quiz />
      <Footer />
    </main>
  );
};

export default App;