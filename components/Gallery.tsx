import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'gzhel',
    name: 'Гжель',
    archetype: 'Хранитель традиций',
    description: 'Традиционная русская роспись. Сине-белые узоры создают атмосферу домашнего уюта.',
    price: 899,
    oldPrice: 1299,
    style: 'traditional',
    tags: ['Гжель', 'Традиции', 'Русские узоры'],
    image: '/images/gzhel.jpg'
  },
  {
    id: 'khokhloma',
    name: 'Хохлома',
    archetype: 'Хранитель огня',
    description: 'Золотые и красные узоры на тёплом фоне. Яркий акцент для любого интерьера.',
    price: 899,
    oldPrice: 1299,
    style: 'traditional',
    tags: ['Хохлома', 'Золото', 'Тепло'],
    image: '/images/khokhloma.jpg'
  },
  {
    id: 'affirmation',
    name: 'Свет во мне',
    archetype: 'Мудрец',
    description: 'Минималистичная рамка с мощной аффирмацией для ежедневной мотивации.',
    price: 899,
    oldPrice: 1199,
    style: 'text',
    tags: ['Аффирмация', 'Мотивация', 'Свет'],
    image: '/images/affirmation-light.jpg'
  },
  {
    id: 'creator',
    name: 'Ваш дизайн',
    archetype: 'Творец',
    description: 'Создайте уникальный светильник с любой надписью или изображением.',
    price: 1599,
    oldPrice: 1999,
    style: 'custom',
    tags: ['Персонализация', 'На заказ'],
    image: '/images/custom.jpg'
  },
  {
    id: 'kids',
    name: 'Сказочный мир',
    archetype: 'Волшебник',
    description: 'Детские мотивы для сладких снов. Единороги, космос, феи.',
    price: 1299,
    oldPrice: 1599,
    style: 'kids',
    tags: ['Детям', 'Сказка'],
    image: '/images/kids.jpg'
  }
];

const Gallery: React.FC = () => {
  const handleProductClick = (productId: string) => {
    // Переход на страницу товара или открытие модального окна
    console.log(`Выбран товар: ${productId}`);
    // Временно показываем уведомление
    const product = products.find(p => p.id === productId);
    if (product) {
      alert(`✨ "${product.name}" готов засиять в вашем доме!\n\n${product.archetype}: ${product.description}\n\nЦена: ${product.price} ₽`);
    }
  };

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
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative aspect-square mb-6 perspective-1000">
                <div className="absolute inset-0 bg-wood-900 rounded-xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-white rounded-xl shadow-xl overflow-hidden border-8 border-wood-300">
                  {/* Эффект свечения */}
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-200/0 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                  
                  {/* Пульсирующее сияние */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-radial from-amber-300/30 via-transparent to-transparent animate-pulse" />
                  </div>
                  
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Overlay для интерактива */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <button className="bg-white text-wood-900 px-6 py-3 rounded-full font-sans text-sm font-semibold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-100">
                      ✨ Зажечь свет
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                {/* Архетип */}
                <p className="text-xs uppercase tracking-wider text-amber-600 mb-1 font-medium">
                  {product.archetype}
                </p>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-wood-500 font-sans mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-center gap-2">
                  {product.oldPrice && (
                    <span className="text-sm text-wood-400 line-through opacity-70">
                      {product.oldPrice} ₽
                    </span>
                  )}
                  <p className="font-serif text-xl font-bold text-amber-600">
                    {product.price} ₽
                  </p>
                </div>
                
                {/* Теги */}
                <div className="flex justify-center gap-2 mt-3">
                  {product.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs bg-wood-100 text-wood-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Дополнительный CTA */}
        <div className="text-center mt-16">
          <p className="text-wood-500 mb-4">Не нашли свою историю?</p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors font-sans font-semibold">
            Создать уникальный дизайн →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
