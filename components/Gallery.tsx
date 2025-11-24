import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  archetype: string;
  archetypeSlogan: string;
  description: string;
  suitableFor: string[];
  price: number;
  oldPrice: number;
  tags: string[];
  image: string;
}

const products: Product[] = [
  {
    id: 'gzhel',
    name: 'Гжель',
    archetype: 'ХРАНИТЕЛЬ ТРАДИЦИЙ',
    archetypeSlogan: 'Связь поколений через свет',
    description: 'Традиционная русская роспись. Сине-белые узоры создают атмосферу спокойствия и глубины.',
    suitableFor: ['Спальня', 'Медитация', 'Подарок бабушке'],
    price: 899,
    oldPrice: 1299,
    tags: ['Гжель', 'Традиции'],
    image: 'https://picsum.photos/id/164/600/600'
  },
  {
    id: 'khokhloma',
    name: 'Хохлома',
    archetype: 'ХРАНИТЕЛЬ ОГНЯ',
    archetypeSlogan: 'Праздник, который всегда с тобой',
    description: 'Золотые и красные узоры на тёплом фоне. Яркий акцент для любого интерьера.',
    suitableFor: ['Гостиная', 'Столовая', 'Праздничный подарок'],
    price: 899,
    oldPrice: 1299,
    tags: ['Хохлома', 'Золото'],
    image: 'https://picsum.photos/id/129/600/600'
  },
  {
    id: 'affirmation',
    name: 'Свет во мне',
    archetype: 'МУДРЕЦ',
    archetypeSlogan: 'Слова, которые исцеляют',
    description: 'Минималистичная рамка с мощной аффирмацией для ежедневной практики осознанности.',
    suitableFor: ['Рабочий стол', 'Медитация', 'Подарок себе'],
    price: 899,
    oldPrice: 1199,
    tags: ['Аффирмация', 'Мотивация'],
    image: 'https://picsum.photos/id/366/600/600'
  },
  {
    id: 'custom',
    name: 'Ваш дизайн',
    archetype: 'ТВОРЕЦ',
    archetypeSlogan: 'Ваша история в рамке',
    description: 'Создайте уникальный светильник с любой картинкой, фото или логотипом.',
    suitableFor: ['Детская', 'Офис', 'Корпоративный подарок'],
    price: 1599,
    oldPrice: 1999,
    tags: ['Персонализация', 'На заказ'],
    image: 'https://picsum.photos/id/250/600/600'
  },
  {
    id: 'kids',
    name: 'Сказочный мир',
    archetype: 'ВОЛШЕБНИК',
    archetypeSlogan: 'Превращаем страх в сказку',
    description: 'Детские мотивы для сладких снов. Единороги, космонавты, динозавры — герои, которые охраняют сон.',
    suitableFor: ['Детская', 'Подарок ребёнку', 'Против страха темноты'],
    price: 1299,
    oldPrice: 1599,
    tags: ['Детям', 'Сказка'],
    image: 'https://picsum.photos/id/1062/600/600'
  },
  {
    id: 'minimal',
    name: 'Чистый свет',
    archetype: 'ФИЛОСОФ',
    archetypeSlogan: 'Свет без лишнего',
    description: 'Чистые линии и спокойные цвета для современного интерьера. Минимализм в его лучшем проявлении.',
    suitableFor: ['Лофт', 'Кабинет', 'Скандинавский интерьер'],
    price: 799,
    oldPrice: 1099,
    tags: ['Минимализм', 'Современный'],
    image: 'https://picsum.photos/id/1047/600/600'
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-wood-100 to-white text-wood-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Коллекция Традиций</h2>
          <p className="text-wood-500 font-sans font-light text-lg">Сочетание ремесла и технологий</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <div className="absolute inset-0 bg-wood-900 transform rotate-2 scale-95 rounded-xl opacity-10"></div>
                  <div className="relative w-full h-full p-4">
                    <div className="w-full h-full bg-white rounded-xl border-8 border-wood-200 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button className="bg-amber-500 hover:bg-amber-400 text-wood-900 px-6 py-3 rounded-full font-sans font-semibold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Sparkles size={16} />
                      Зажечь свет
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Archetype */}
                  <p className="text-xs font-sans tracking-widest text-amber-600 mb-1">
                    {product.archetype}
                  </p>
                  
                  {/* Name */}
                  <h3 className="text-2xl font-serif mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-wood-500 font-sans mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-wood-400 line-through text-sm">{product.oldPrice} ₽</span>
                    <span className="text-2xl font-serif font-bold text-amber-600">{product.price} ₽</span>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-wood-100 text-wood-600 px-3 py-1 rounded-full font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-wood-500 font-sans mb-4">Не нашли свою историю?</p>
          <button className="bg-amber-500 hover:bg-amber-400 text-wood-900 px-8 py-4 rounded-full font-sans font-semibold transition-colors inline-flex items-center gap-2">
            Создать уникальный дизайн →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
