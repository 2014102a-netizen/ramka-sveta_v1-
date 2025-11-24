import React from 'react';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tone: 'cool' | 'warm';
}

const galleryItems: GalleryItem[] = [
  {
    id: 'gzhel',
    title: 'Гжель',
    subtitle: 'Холодный синий свет, который успокаивает перед сном.',
    image: '/images/gzhel.svg',
    tone: 'cool',
  },
  {
    id: 'khokhloma',
    title: 'Хохлома',
    subtitle: 'Тёплый золотой орнамент, который создаёт ощущение домашнего огня.',
    image: '/images/khokhloma.svg',
    tone: 'warm',
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="bg-white text-wood-900 py-20" id="gallery">
      <div className="container mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">Коллекция ночников</p>
          <h2 className="text-4xl md:text-5xl font-serif">Тепло традиций в каждом кадре</h2>
          <p className="text-wood-500 max-w-2xl mx-auto font-sans">
            Два настроения, две истории: спокойная Гжель и огненная Хохлома. Выберите тот свет, который ближе к вашему дому.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl shadow-2xl border border-wood-100 bg-white flex flex-col"
            >
              <div className="relative overflow-hidden">
                <div
                  className={`absolute inset-0 transition-opacity duration-700 pointer-events-none bg-gradient-to-b ${
                    item.tone === 'cool'
                      ? 'from-sky-200/0 via-sky-200/20 to-amber-200/30'
                      : 'from-amber-200/0 via-amber-200/10 to-amber-400/40'
                  } opacity-0 group-hover:opacity-100`}
                />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-8 space-y-3 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif">{item.title}</h3>
                <p className="text-wood-600 font-sans leading-relaxed">{item.subtitle}</p>
                <div className="mt-auto pt-4 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-amber-700">
                  <span className="h-px flex-1 bg-amber-200" aria-hidden />
                  <span>Смотреть свет</span>
                  <span className="h-px flex-1 bg-amber-200" aria-hidden />
                </div>
              </div>
            </article>
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
