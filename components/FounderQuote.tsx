import React from 'react';
import { motion } from 'framer-motion';

const FounderQuote: React.FC = () => {
  return (
    <section className="py-20 bg-wood-900 text-wood-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Quote marks */}
          <div className="text-amber-500/30 text-9xl font-serif leading-none mb-4">"</div>
          
          <blockquote className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-8 -mt-12">
            Каждая рамка — это встреча прошлого и будущего. 
            Узоры, которым 200 лет, светятся современным светом. 
            Мы не просто делаем ночники — мы соединяем поколения.
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
              <span className="text-amber-300 font-serif text-2xl">С</span>
            </div>
            <div className="text-left">
              <p className="font-serif text-lg text-white">Света</p>
              <p className="text-sm text-wood-400 font-sans">основательница РАМКА СВЕТА</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuote;
