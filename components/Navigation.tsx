
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="bg-white/40 backdrop-blur-xl border-b border-white/30 py-4 px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative overflow-hidden w-11 h-11 flex items-center justify-center">
               <div className="absolute inset-0 border border-[#d4af37] rounded-full rotate-45 group-hover:rotate-180 transition-transform duration-1000"></div>
               <span className="serif text-2xl font-bold italic text-[#d4af37]">L</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-light tracking-[0.3em] uppercase serif leading-none">Laksh</h1>
              <span className="text-[9px] uppercase tracking-[0.5em] text-gray-400 mt-1">Artistry</span>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-12 font-light uppercase text-[10px] tracking-[0.3em]">
            <a href="#/" className="hover:text-[#d4af37] transition-all relative group">
              Atelier
              <span className="absolute bottom-[-6px] left-1/2 w-0 h-[1px] bg-[#d4af37] group-hover:w-full group-hover:left-0 transition-all"></span>
            </a>
            <a href="#/services" className="hover:text-[#d4af37] transition-all relative group">
              Services
              <span className="absolute bottom-[-6px] left-1/2 w-0 h-[1px] bg-[#d4af37] group-hover:w-full group-hover:left-0 transition-all"></span>
            </a>
            <a href="#/lookbook" className="hover:text-[#d4af37] transition-all relative group">
              Gallery
              <span className="absolute bottom-[-6px] left-1/2 w-0 h-[1px] bg-[#d4af37] group-hover:w-full group-hover:left-0 transition-all"></span>
            </a>
          </div>
          
          <a 
            href="#/booking" 
            className="shimmer-btn px-10 py-3 bg-[#c53030] text-white text-[10px] uppercase font-bold tracking-[0.2em] shadow-lg hover:shadow-crimson-300 transition-all"
          >
            Reserve Your Date
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
