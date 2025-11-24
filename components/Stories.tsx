import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const stories = [
  {
    id: 1,
    quote: "Это не просто ночник, это друг моего ребёнка",
    author: "Мария",
    role: "мама троих детей",
    before: "Младший сын боялся спать один. Каждую ночь приходил к нам в комнату. Мы перепробовали всё — обычные ночники, гирлянды, даже оставляли свет в коридоре.",
    solution: "Поставили ночник с космонавтом и звёздами. Вместе придумали историю, что космонавт прилетел специально охранять его сны.",
    after: "Теперь сам бежит в кровать! Говорит, что космонавт его охраняет. Засыпает за 10 минут. Мы с мужем впервые за год смотрим фильмы по вечерам."
  },
  {
    id: 2,
    quote: "Бабушка расплакалась, когда увидела",
    author: "Анна",
    role: "дизайнер интерьеров",
    before: "Искала подарок бабушке на 80-летие. Всё казалось банальным — цветы, конфеты, очередной халат. Хотелось что-то со смыслом.",
    solution: "Заказали рамку с гжельским узором и надписью «Свет рода нашего». Внутри — семейное фото четырёх поколений.",
    after: "Бабушка расплакалась. Сказала, что впервые получила подарок, который про неё, а не про возраст. Рамка стоит в центре серванта."
  },
  {
    id: 3,
    quote: "Каждое утро начинаю с улыбки",
    author: "Елена",
    role: "психолог",
    before: "После выгорания тяжело было просыпаться. Будильник — как приговор. Хотелось мягкого, доброго начала дня.",
    solution: "Поставила на тумбочку рамку с аффирмацией «Я достаточно». Включается за 15 минут до будильника, свет нарастает постепенно.",
    after: "Просыпаюсь от тёплого света и первое, что вижу — напоминание о своей ценности. Простая вещь, но изменила утра."
  }
];

const Stories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % stories.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);

  const story = stories[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-wood-100 to-white text-wood-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Истории, которые светятся</h2>
          <p className="text-wood-500 font-sans font-light text-lg">
            Каждая рамка — это не просто покупка. Это начало новой истории.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 relative">
                <Quote className="absolute top-8 left-8 text-amber-200" size={48} />
                
                <div className="text-center mb-8 pt-8">
                  <h3 className="text-2xl md:text-3xl font-serif text-wood-900 italic mb-4">
                    "{story.quote}"
                  </h3>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 font-serif text-xl">{story.author[0]}</span>
                    </div>
                    <div className="text-left">
                      <p className="font-serif font-medium text-wood-900">{story.author}</p>
                      <p className="text-sm text-wood-500">{story.role}</p>
                    </div>
                  </div>
                </div>

                {/* Story Timeline */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-wood-50 rounded-2xl p-6">
                    <span className="inline-block bg-wood-200 text-wood-700 text-xs font-sans font-medium px-3 py-1 rounded-full mb-3">
                      Было
                    </span>
                    <p className="font-sans text-wood-600 text-sm leading-relaxed">
                      {story.before}
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                    <span className="inline-block bg-amber-200 text-amber-700 text-xs font-sans font-medium px-3 py-1 rounded-full mb-3">
                      Решение
                    </span>
                    <p className="font-sans text-wood-600 text-sm leading-relaxed">
                      {story.solution}
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-2xl p-6">
                    <span className="inline-block bg-green-200 text-green-700 text-xs font-sans font-medium px-3 py-1 rounded-full mb-3">
                      Стало
                    </span>
                    <p className="font-sans text-wood-600 text-sm leading-relaxed">
                      {story.after}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-wood-100 hover:bg-wood-200 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="text-wood-600" size={24} />
            </button>
            
            <div className="flex gap-2">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-amber-500' : 'w-2 bg-wood-200 hover:bg-wood-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-wood-100 hover:bg-wood-200 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="text-wood-600" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
