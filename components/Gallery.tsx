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
  }
];

const handleProductClick = (productId: string) => {
  // Переход на страницу товара или открытие модального окна
  console.log(`Выбран товар: ${productId}`);
  // TODO: Добавить роутинг или модальное окно
  // Временно можно добавить alert
  const productName = products.find((p) => p.id === productId)?.name;
  if (productName) {
    alert(`Товар "${productName}" добавлен в корзину!`);
  }
};

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
              onClick={() => handleProductClick(product.id)}
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
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center">
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
