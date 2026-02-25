
import React from 'react';
import { BRIDAL_PACKAGES, SPA_PACKAGES, ADDITIONAL_SERVICES } from '../constants';
import { formatCurrency } from '../utils';

const PricingTable: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <span className="text-[10px] tracking-[0.5em] uppercase text-[#d4af37] font-bold mb-4 block">Artisanal Collections</span>
        <h2 className="text-6xl font-light serif mb-6 italic text-[#2d2d2d]">The Investment</h2>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {BRIDAL_PACKAGES.map((pkg) => (
          <div key={pkg.id} className="glass-card ethereal-glow p-10 flex flex-col items-center text-center transition-all duration-700 hover:-translate-y-4 hover:bg-white/80 group">
            {pkg.complimentary && (
              <div className="bg-[#c53030] text-white text-[8px] uppercase font-bold tracking-widest px-4 py-1 mb-6 rounded-full shadow-md">
                Signature Bundle
              </div>
            )}
            <h3 className="serif text-2xl mb-4 group-hover:text-[#c53030] transition-colors">{pkg.name}</h3>
            <div className="text-4xl font-light mb-10 text-[#2d2d2d] serif border-b border-[#d4af37]/20 pb-4 w-full">
              {formatCurrency(pkg.price)}
            </div>
            
            <ul className="text-[10px] uppercase tracking-[0.2em] space-y-5 mb-12 flex-grow">
              {pkg.features.map((f, i) => (
                <li key={i} className="text-gray-500 font-light">
                  {f}
                </li>
              ))}
              {pkg.complimentary?.map((c, i) => (
                <li key={i} className="text-[#c53030] font-bold tracking-[0.3em]">
                  {c} Free
                </li>
              ))}
            </ul>
            
            <a href={`#/booking?pkg=${pkg.id}`} className="w-full py-4 text-[9px] uppercase font-bold tracking-[0.4em] border border-[#2d2d2d]/10 hover:border-[#c53030] hover:text-[#c53030] transition-all">
              Book Package
            </a>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="glass-card p-12 border-none shadow-xl relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fdf2f2] to-transparent opacity-30 group-hover:opacity-60 transition-opacity"></div>
          <h3 className="text-3xl font-light serif mb-10 italic relative z-10">Ritual Spa Bundles</h3>
          {SPA_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="relative z-10">
              <div className="flex justify-between items-baseline mb-8">
                <span className="text-xl serif italic">{pkg.name}</span>
                <span className="text-3xl font-light text-[#c53030]">{formatCurrency(pkg.price)}</span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-8 leading-relaxed">{pkg.description}</p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {pkg.features.map((f, i) => (
                  <div key={i} className="text-[9px] uppercase tracking-[0.3em] flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full shadow-sm"></div> {f}
                  </div>
                ))}
              </div>
              <button className="shimmer-btn px-10 py-5 bg-[#2d2d2d] text-white text-[10px] uppercase font-bold tracking-[0.5em] hover:bg-[#c53030] transition-all w-full md:w-auto">
                Select Spa Ritual
              </button>
            </div>
          ))}
        </div>

        <div className="glass-card p-12 border-none shadow-xl">
          <h3 className="text-3xl font-light serif mb-10 italic">À La Carte</h3>
          <div className="space-y-6">
            {ADDITIONAL_SERVICES.map((service, i) => (
              <div key={i} className="flex justify-between items-center border-b border-black/5 pb-4 group hover:border-[#d4af37]/40 transition-colors">
                <span className="font-light text-[11px] uppercase tracking-[0.3em] group-hover:text-[#c53030] transition-colors">{service.name}</span>
                <span className="serif italic text-[#d4af37] text-lg">{service.price}</span>
              </div>
            ))}
            <div className="pt-8 text-[10px] leading-loose text-gray-400 font-light italic uppercase tracking-[0.3em]">
               Theatrical & Drama Artistry available upon specialized request.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
