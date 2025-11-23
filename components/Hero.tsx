import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Dark Overlay that fades out */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-black z-0 pointer-events-none"
        />

        {/* Ambient Glow */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-slate-900 to-wood-900 z-0"
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div 
            style={{ opacity, scale }}
            className="flex flex-col items-center justify-center"
          >
            {/* The Lamp/Frame visual */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 mb-12 group perspective-1000">
              <div className="absolute inset-0 bg-amber-500/30 blur-[100px] rounded-full animate-pulse" />
              
              <div className="relative w-full h-full bg-wood-700 rounded-lg p-4 shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-12">
                <div className="absolute inset-0 border-[1px] border-wood-500/30 rounded-lg pointer-events-none"></div>
                <div className="w-full h-full bg-white/95 rounded shadow-inner-light overflow-hidden flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-[url('https://picsum.photos/800/800?grayscale')] opacity-10 mix-blend-multiply"></div>
                   <div className="text-center p-6">
                      <h3 className="font-serif text-3xl text-wood-900 mb-2">Свет во мне</h3>
                      <p className="font-sans text-xs tracking-widest text-wood-700 uppercase">Коллекция Аффирмации</p>
                   </div>
                   {/* Light Effect */}
                   <div className="absolute inset-0 bg-radial-gradient from-amber-100/50 to-transparent opacity-80"></div>
                </div>
              </div>
            </div>

            <motion.div style={{ y }} className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-serif text-white font-light tracking-wide">
                В каждом доме <br />
                <span className="text-amber-300 italic">должен быть свой маяк</span>
              </h1>
              <p className="text-white/70 max-w-lg mx-auto font-sans font-light text-lg">
                Уникальные светильники из дерева, хранящие тепло русских традиций и силу современных смыслов.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
           <span className="text-white/50 text-xs tracking-widest uppercase">Тяните вверх, чтобы зажечь свет</span>
           <ChevronDown className="text-white/50 animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;