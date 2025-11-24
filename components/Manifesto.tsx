import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-32 bg-wood-900 text-wood-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-12"
          >
            <Flame className="text-amber-400" size={36} />
          </motion.div>

          {/* Philosophy points */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl font-sans font-light text-wood-300 mb-8">
              Этот сайт — не просто каталог. Это:
            </p>
            
            <div className="space-y-4 mb-12">
              <p className="text-xl md:text-2xl font-serif text-white/90">
                История о том, как свет может изменить пространство
              </p>
              <p className="text-xl md:text-2xl font-serif text-white/90">
                Путешествие, где вы становитесь героем
              </p>
              <p className="text-xl md:text-2xl font-serif text-white/90">
                Эмоциональная связь вместо сухих характеристик
              </p>
            </div>
          </motion.div>

          {/* Main quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-24 bg-amber-500/50 mx-auto mb-12"></div>
            
            <blockquote className="text-3xl md:text-5xl font-serif italic text-white leading-tight mb-6">
              Люди не покупают ночники.
              <br />
              <span className="text-amber-300">
                Они покупают истории, в которых видят себя.
              </span>
            </blockquote>
            
            <p className="text-2xl md:text-3xl font-serif text-amber-400 mt-8">
              Какая твоя?
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
