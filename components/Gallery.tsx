import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'gzhel',
    name: 'Зимняя Сказка',
    description: 'Гжельские мотивы в современном исполнении. Холодные тона узора согреваются теплым светом.',
    price: 4500,
    style: 'traditional',
    tags: ['Гжель', 'Традиции'],
    image: 'https://picsum.photos/id/164/600/600' // Placeholder resembling blue/white
  },
  {
    id: 'khokhloma',
    name: 'Жар-Птица',
    description: 'Золотая Хохлома. Яркие, страстные цвета для акцента в интерьере гостиной.',
    price: 4900,
    style: 'traditional',
    tags: ['Хохлома', 'Золото'],
    image: 'https://picsum.photos/id/129/600/600' // Placeholder resembling warm tones
  },
  {
    id: 'affirmation',
    name: 'Свет во мне',
    description: 'Минималистичная рамка с мощной аффирмацией. Идеально для утренней медитации.',
    price: 3800,
    style: 'text',
    tags: ['Аффирмация', 'Минимализм'],
    image: 'https://picsum.photos/id/366/600/600'
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-wood-100 to-white text-wood-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-serif mb-4">Коллекция Традиций</h2>
           <p className="text-wood-500 font-sans font-light">Сочетание ремесла и технологий</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square mb-6 perspective-1000">
                <div className="absolute inset-0 bg-wood-900 rounded-xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-white rounded-xl shadow-xl overflow-hidden border-8 border-wood-300">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay for interaction */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-wood-900 px-6 py-3 rounded-full font-sans text-sm font-semibold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-2 group-hover:text-amber-600 transition-colors">{product.name}</h3>
                <p className="text-sm text-wood-500 font-sans mb-3 line-clamp-2">{product.description}</p>
                <p className="font-serif text-xl font-bold">{product.price} ₽</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;