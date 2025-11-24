import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Home, Gift, Sparkles } from 'lucide-react';

const painPoints = [
  {
    icon: Moon,
    title: "Ребёнок боится спать один",
    description: "Каждый вечер — борьба. Темнота пугает, воображение рисует монстров под кроватью."
  },
  {
    icon: Home,
    title: "В комнате не хватает уюта",
    description: "Всё правильно, но холодно. Хочется тепла, души, чего-то личного."
  },
  {
    icon: Sparkles,
    title: "Надоели одинаковые ночники",
    description: "Массмаркет везде одинаковый. Хочется что-то уникальное, с характером."
  },
  {
    icon: Gift,
    title: "Нужен особенный подарок",
    description: "То, что точно не выбросят. С душой, памятью, историей."
  }
];

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-wood-900 text-wood-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 blur-[150px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Знакомо?</h2>
          <p className="text-wood-300 font-sans font-light text-lg max-w-xl mx-auto">
            Каждый вечер миллионы людей сталкиваются с этими проблемами
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                  <point.icon className="text-amber-400" size={28} />
                </div>
                <h3 className="font-serif text-xl mb-3 text-white group-hover:text-amber-300 transition-colors">
                  {point.title}
                </h3>
                <p className="font-sans font-light text-wood-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-serif text-amber-300 italic">
            И решение проще, чем вы думаете
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;
