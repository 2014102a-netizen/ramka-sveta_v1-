import React from 'react';
import { Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-serif mb-2">РАМКА СВЕТА</h4>
          <p className="text-white/50 text-sm font-sans">Создаем уют с русской душой.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-amber-400 transition-colors"><Instagram /></a>
          <a href="#" className="hover:text-amber-400 transition-colors"><Send /></a>
        </div>

        <div className="text-center md:text-right text-sm text-white/30">
          <p>&copy; 2024 Ramka Sveta.</p>
          <p>Made with light & love.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
