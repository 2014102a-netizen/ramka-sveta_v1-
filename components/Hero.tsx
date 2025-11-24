import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [80, 0]);

  return (
    <section ref={containerRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black z-0 pointer-events-none"
        />

        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-slate-900 via-wood-900 to-wood-700 z-0"
        />

        <div className="relative z-10 container mx-auto px-6 text-center space-y-10">
          <motion.div
            style={{ scale, opacity: glowOpacity }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto group perspective-1000">
              <div className="absolute inset-0 bg-amber-500/30 blur-[110px] rounded-full" />

              <div className="relative w-full h-full bg-wood-700 rounded-lg p-4 shadow-2xl transform transition-transform duration-700 group-hover:rotate-3">
                <div className="absolute inset-0 border-[1px] border-wood-500/30 rounded-lg pointer-events-none"></div>
                <div className="w-full h-full bg-white/95 rounded shadow-inner-light overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fff8e7_0%,rgba(255,244,214,0.6)_35%,transparent_65%)] opacity-70" />
                  <div className="text-center p-6 relative z-10 space-y-2">
                    <h3 className="font-serif text-3xl text-wood-900 mb-1">Свет во мне</h3>
                    <p className="font-sans text-xs tracking-[0.35em] text-wood-700 uppercase">Коллекция аффирмаций</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div style={{ y }} className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-serif text-white font-light tracking-wide">Свет во мне</h1>
              <p className="text-amber-200 text-lg uppercase tracking-[0.25em]">Коллекция аффирмаций</p>
              <p className="text-white max-w-2xl mx-auto font-sans text-xl md:text-2xl">
                В каждом доме должен быть свой маяк
              </p>
              <p className="text-white/70 max-w-2xl mx-auto font-sans font-light text-lg">
                Уникальные светильники из дерева, хранящие тепло русских традиций и силу современных смыслов.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/70 text-xs tracking-widest uppercase">Потяните вниз, чтобы зажечь свет</span>
          <ChevronDown className="text-white/70 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
