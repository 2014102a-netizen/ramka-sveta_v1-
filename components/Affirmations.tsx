import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Check } from 'lucide-react';

const Affirmations: React.FC = () => {
  const [isOldSlavic, setIsOldSlavic] = useState(false);

  // Correction based on historical linguistics:
  // "Azm" (Азмь) is a common hypercorrection. 
  // Standard Old Church Slavonic "I am" is "Азъ есмь". "Light" is "свѣтъ".
  const content = {
    modern: {
      title: "Я есть свет",
      sub: "Современная лаконичность",
      desc: "Напоминание о внутренней силе на понятном языке."
    },
    ancient: {
      title: "Азъ есмь свѣтъ",
      sub: "Древняя мудрость",
      desc: "Глубокая связь с корнями через исконное слово."
    }
  };

  return (
    <section className="py-24 bg-wood-100 text-wood-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Слово имеет значение
              </h2>
              <p className="text-lg font-sans font-light leading-relaxed max-w-xl">
                Мы создаем рамки не только с узорами, но и со смыслами. 
                Выберите то, что откликается вашему сердцу: современная уверенность или вековая мудрость предков.
              </p>
            </motion.div>

            <div className="flex gap-4">
               <button 
                onClick={() => setIsOldSlavic(false)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${!isOldSlavic ? 'bg-wood-900 text-wood-100 shadow-lg' : 'bg-transparent border border-wood-900/20 text-wood-900'}`}
               >
                 {!isOldSlavic && <Check size={16} />}
                 Современный стиль
               </button>
               <button 
                onClick={() => setIsOldSlavic(true)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${isOldSlavic ? 'bg-wood-900 text-wood-100 shadow-lg' : 'bg-transparent border border-wood-900/20 text-wood-900'}`}
               >
                 {isOldSlavic && <Check size={16} />}
                 Старославянский
               </button>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center perspective-1000">
             <div className="relative w-full max-w-md aspect-square">
                {/* Background Glow */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-amber-400/20 blur-[60px] rounded-full"
                />

                <div className="relative w-full h-full bg-wood-900 p-4 rounded-xl shadow-2xl">
                   <div className="w-full h-full bg-[#FFFBF0] rounded-lg shadow-inner flex items-center justify-center relative overflow-hidden">
                      {/* Texture Overlay */}
                      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                      
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={isOldSlavic ? 'ancient' : 'modern'}
                          initial={{ opacity: 0, scale: 0.9, rotateX: 90 }}
                          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                          exit={{ opacity: 0, scale: 1.1, rotateX: -90 }}
                          transition={{ duration: 0.5 }}
                          className="text-center z-10 p-8"
                        >
                          <h3 className={`text-5xl md:text-6xl text-wood-900 mb-4 ${isOldSlavic ? 'old-slavic font-serif tracking-widest' : 'font-serif'}`}>
                            {isOldSlavic ? content.ancient.title : content.modern.title}
                          </h3>
                          <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
                          <p className="font-sans text-wood-500 text-sm uppercase tracking-widest">
                            {isOldSlavic ? content.ancient.sub : content.modern.sub}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Affirmations;