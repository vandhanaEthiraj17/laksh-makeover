
import React from 'react';
import { LOOKBOOK_GALLERY } from '../constants';

const PolaroidGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 p-8">
      {LOOKBOOK_GALLERY.map((item) => (
        <div 
          key={item.id} 
          className="bg-white p-5 pb-20 shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:rotate-0 cursor-pointer group glass-card border-none"
          style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
        >
          <div className="aspect-[4/5] overflow-hidden bg-gray-50 mb-10 shadow-inner">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 contrast-[1.05]"
            />
          </div>
          <div className="px-4 text-center">
            <span className="text-[9px] uppercase tracking-[0.6em] text-[#c53030] font-bold">{item.category}</span>
            <h3 className="text-3xl font-light serif mt-4 italic text-[#2d2d2d] group-hover:text-[#d4af37] transition-colors">{item.title}</h3>
            <div className="w-10 h-[1px] bg-gray-100 mx-auto my-6 group-hover:w-full transition-all duration-700"></div>
            <p className="text-[9px] text-gray-400 font-light uppercase tracking-[0.4em] leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolaroidGallery;
