
import React from 'react';
import Navigation from '../components/Navigation';
import PolaroidGallery from '../components/PolaroidGallery';
import PricingTable from '../components/PricingTable';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=2000" 
            alt="Indian Bride Artistry" 
            className="w-full h-full object-cover brightness-[0.85] contrast-[1.1] transition-transform duration-[20s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#fff1f2]/90"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6">
          <div className="mb-10 overflow-hidden">
            <span className="block text-white uppercase tracking-[1em] text-[10px] font-bold animate-pulse">Ethereal Heritage & Modern Glam</span>
          </div>
          <h1 className="text-white text-7xl md:text-[11rem] font-light serif leading-[0.8] mb-14 drop-shadow-2xl">
            Laksh <br /> 
            <span className="italic opacity-90 font-light text-[#d4af37]">Atelier</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href="#/booking" className="shimmer-btn min-w-[240px] bg-[#c53030] text-white px-12 py-5 uppercase text-[10px] font-bold tracking-[0.5em] shadow-2xl hover:scale-105 transition-all">
              Book Your Session
            </a>
            <a href="#/lookbook" className="min-w-[240px] backdrop-blur-md border border-white/40 text-white px-12 py-5 uppercase text-[10px] font-bold tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-700">
              The Collection
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.8em] text-[#c53030] uppercase font-bold mb-10 block">Artistry Philosophy</span>
          <h2 className="serif text-5xl md:text-6xl font-light italic mb-16 leading-tight">"Where tradition meets the stroke of timeless innovation."</h2>
          <div className="w-20 h-[1px] bg-[#d4af37] mx-auto mb-16"></div>
          <p className="text-[11px] uppercase tracking-[0.4em] font-light text-gray-500 leading-loose max-w-2xl mx-auto">
            Specializing in luxury bridal transformations and theatrical artistry. We create cinematic looks that celebrate your lineage while embracing contemporary elegance.
          </p>
        </div>
      </section>

      <section id="services">
        <PricingTable />
      </section>

      {/* Minimalist Lookbook Preview */}
      <section id="lookbook" className="py-40 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="text-7xl font-light serif italic leading-none">The Muse</h2>
              <p className="text-[10px] uppercase tracking-[0.6em] text-[#d4af37] font-bold mt-6">A Curated Gallery of Transformations</p>
            </div>
            <a href="#/lookbook" className="text-[#c53030] font-bold uppercase text-[11px] tracking-[0.5em] border-b border-[#c53030] pb-2 hover:opacity-70 transition-opacity">View All Series</a>
          </div>
          <PolaroidGallery />
        </div>
      </section>

      {/* Sophisticated Testimonials */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] serif italic text-[#c53030]/5 select-none pointer-events-none">Muse</div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="serif text-4xl italic font-light leading-relaxed mb-16">
            "Laksh captured the soul of my heritage. I didn't just look beautiful; I felt connected to my lineage. An ethereal experience through and through."
          </div>
          <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mb-10"></div>
          <p className="font-bold uppercase tracking-[0.6em] text-[10px] text-[#2d2d2d]">Meera Ragunath</p>
          <p className="text-[9px] text-[#c53030] uppercase tracking-[0.4em] mt-3 font-bold">Elite Wedding Bundle Client</p>
        </div>
      </section>

      {/* Ethereal Footer */}
      <footer className="py-32 px-6 border-t border-white/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-light serif italic mb-10 text-[#d4af37]">Laksh Atelier</h2>
            <p className="text-[11px] uppercase tracking-[0.3em] leading-loose text-gray-500 max-w-sm mb-12">
              Bespoke high-definition artistry for bridal and cinematic occasions. Crafting elegance since 1998.
            </p>
            <div className="flex gap-12">
              {['Instagram', 'Pinterest', 'Editorial'].map(s => (
                <span key={s} className="text-[9px] uppercase tracking-[0.4em] font-bold border-b border-transparent hover:border-[#c53030] transition-all cursor-pointer">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-10">
            <h4 className="font-bold uppercase text-[10px] tracking-[0.5em] text-[#c53030]">Navigation</h4>
            <ul className="space-y-5 text-[10px] uppercase tracking-[0.4em] font-light">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">The Suite</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Spa Rituals</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Portraits</a></li>
            </ul>
          </div>
          <div className="space-y-10">
            <h4 className="font-bold uppercase text-[10px] tracking-[0.5em] text-[#c53030]">Enquiries</h4>
            <ul className="space-y-8 text-[11px] font-light">
              <li className="flex flex-col gap-3">
                <span className="text-[8px] uppercase font-bold text-gray-400 tracking-[0.2em]">Contact</span>
                <span className="uppercase tracking-widest text-xs">studio@lakshartistry.com</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-[8px] uppercase font-bold text-gray-400 tracking-[0.2em]">The Atelier</span>
                <span className="uppercase tracking-widest text-xs">Heritage Block, MG Road</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 flex justify-between text-[8px] uppercase tracking-[0.6em] text-gray-400 pt-10 border-t border-black/5">
          <p>© 2024 Laksh Atelier. Purity in Art.</p>
          <div className="flex gap-12">
            <span>Privé</span>
            <span className="text-[#c53030] font-bold">Est. 1998</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
