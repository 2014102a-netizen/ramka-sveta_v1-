import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../types';
import { ArrowRight, RefreshCcw, Sparkles } from 'lucide-react';

const questions: Question[] = [
  {
    id: 1,
    text: "Для кого вы выбираете свет?",
    options: [
      { label: "Для ребёнка", value: "child", emoji: "👶" },
      { label: "Для себя", value: "self", emoji: "🧘" },
      { label: "В подарок", value: "gift", emoji: "🎁" },
    ]
  },
  {
    id: 2,
    text: "Что для вас важнее?",
    options: [
      { label: "Русские традиции", value: "tradition", emoji: "🎨" },
      { label: "Смысл и слова", value: "meaning", emoji: "📜" },
      { label: "Уют и спокойствие", value: "comfort", emoji: "✨" },
    ]
  },
  {
    id: 3,
    text: "Какое настроение хотите создать?",
    options: [
      { label: "Сказочное", value: "fairy", emoji: "🦄" },
      { label: "Вдохновляющее", value: "inspire", emoji: "💡" },
      { label: "Расслабляющее", value: "relax", emoji: "🌙" },
    ]
  }
];

const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getResult = () => {
    // Simple logic for demo purposes
    if (answers.includes('child')) return { title: "Единорог в облаках", desc: "Мягкий свет, разгоняющий ночные страхи." };
    if (answers.includes('tradition')) return { title: "Гжельская Ночь", desc: "Классика, которая никогда не выйдет из моды." };
    if (answers.includes('meaning')) return { title: "Свет во мне", desc: "Ежедневное напоминание о вашей внутренней силе." };
    return { title: "Теплое Дерево", desc: "Универсальный уют для любого интерьера." };
  };

  return (
    <section className="py-24 bg-wood-900 text-wood-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/40 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Найдём ваш идеальный свет</h2>
            <div className="h-1 w-24 bg-amber-500/50 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-sans tracking-widest text-wood-300">ВОПРОС {currentStep + 1} ИЗ {questions.length}</span>
                    <div className="flex gap-1">
                      {questions.map((_, idx) => (
                        <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx <= currentStep ? 'w-8 bg-amber-400' : 'w-2 bg-white/20'}`} />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-3xl font-serif mb-8">{questions[currentStep].text}</h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    {questions[currentStep].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className="group bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/50 rounded-xl p-6 transition-all duration-300 flex flex-col items-center gap-3 text-center"
                      >
                        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{option.emoji}</span>
                        <span className="font-sans font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 text-wood-900 shadow-glow">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-xl font-sans text-wood-300 mb-2">Ваш идеальный выбор:</h3>
                  <h2 className="text-5xl font-serif text-white mb-6">{getResult().title}</h2>
                  <p className="text-xl font-light text-wood-100 mb-8 max-w-lg mx-auto">{getResult().desc}</p>
                  
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="bg-amber-500 hover:bg-amber-400 text-wood-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-colors">
                      Посмотреть модель <ArrowRight size={20} />
                    </button>
                    <button 
                      onClick={resetQuiz}
                      className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <RefreshCcw size={18} /> Начать заново
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;