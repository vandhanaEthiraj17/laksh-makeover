
import React, { useState, useEffect } from 'react';
import { BRIDAL_PACKAGES, SPA_PACKAGES } from '../constants';
import { calculateBalanceDue, formatCurrency, isValidEmail } from '../utils';

const BookingForm: React.FC = () => {
  const allPackages = [...BRIDAL_PACKAGES, ...SPA_PACKAGES];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    packageId: allPackages[0].id,
    advancePaid: 0,
  });

  const [selectedPackage, setSelectedPackage] = useState(allPackages[0]);
  const [balanceDue, setBalanceDue] = useState(0);

  useEffect(() => {
    const pkg = allPackages.find(p => p.id === formData.packageId) || allPackages[0];
    setSelectedPackage(pkg);
  }, [formData.packageId]);

  useEffect(() => {
    setBalanceDue(calculateBalanceDue(selectedPackage.price, formData.advancePaid));
  }, [selectedPackage, formData.advancePaid]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      alert("Invalid email format.");
      return;
    }
    
    const booking = {
      ...formData,
      id: `LAKSH-${Date.now().toString().slice(-4)}`,
      totalAmount: selectedPackage.price,
      balanceDue,
      status: 'Pending'
    };

    const existing = JSON.parse(localStorage.getItem('laksh_bookings') || '[]');
    localStorage.setItem('laksh_bookings', JSON.stringify([...existing, booking]));

    alert(`Reservation Confirmed\n\nRef: ${booking.id}\nPackage: ${selectedPackage.name}\nFinal Balance: ${formatCurrency(balanceDue)}`);
    
    setFormData({
      name: '', email: '', phone: '', date: '', packageId: allPackages[0].id, advancePaid: 0,
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-0">
      <div className="glass-card luxe-border p-12 flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <h2 className="text-4xl font-light serif italic mb-10 pb-4 border-b border-black/5">Consultation Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#d4af37]">Your Name</label>
                <input 
                  type="text" required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#d4af37] outline-none py-2 text-sm uppercase tracking-widest font-light"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#d4af37]">Contact Number</label>
                <input 
                  type="tel" required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#d4af37] outline-none py-2 text-sm uppercase tracking-widest font-light"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#d4af37]">Electronic Mail</label>
              <input 
                type="email" required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-gray-200 focus:border-[#d4af37] outline-none py-2 text-sm uppercase tracking-widest font-light"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#d4af37]">Event Date</label>
                <input 
                  type="date" required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#d4af37] outline-none py-2 text-sm font-light"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#d4af37]">Artistry Selection</label>
                <select 
                  value={formData.packageId}
                  onChange={(e) => setFormData({...formData, packageId: e.target.value})}
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#d4af37] outline-none py-2 text-sm serif italic"
                >
                  {allPackages.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#d4af37]">Advance Commitment (INR)</label>
              <input 
                type="number" min="0" max={selectedPackage.price}
                value={formData.advancePaid}
                onChange={(e) => setFormData({...formData, advancePaid: Number(e.target.value)})}
                className="w-full bg-transparent border-b border-gray-200 focus:border-[#d4af37] outline-none py-2 text-sm font-light"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#2d2d2d] text-white py-6 uppercase text-[10px] font-bold tracking-[0.5em] hover:bg-[#d4af37] transition-all"
            >
              Request Reservation
            </button>
          </form>
        </div>

        <div className="w-full lg:w-80 space-y-12">
          <div className="p-8 border border-[#d4af37] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fff9f5] px-4 text-[9px] uppercase tracking-[0.4em] text-[#d4af37] font-bold">Summary</div>
            <div className="space-y-8">
              <div>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-2">Artistry Fee</p>
                <p className="text-3xl font-light serif italic">{formatCurrency(selectedPackage.price)}</p>
              </div>
              <div>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-2">Commitment Paid</p>
                <p className="text-xl font-light text-green-700 italic">-{formatCurrency(formData.advancePaid)}</p>
              </div>
              <div className="pt-8 border-t border-dashed border-[#d4af37]">
                <p className="text-[9px] text-[#d4af37] font-bold uppercase tracking-widest mb-2">Balance Remaining</p>
                <p className="text-4xl font-light serif italic">{formatCurrency(balanceDue)}</p>
              </div>
            </div>
          </div>
          
          <div className="text-[10px] leading-relaxed text-gray-500 uppercase tracking-widest font-light italic">
            <p className="font-bold text-[#d4af37] mb-4">The Laksh Guarantee:</p>
            <p>Your session includes high-definition products, artisanal hair design, and bespoke saree draping. Complimentary Mehendi is included where specified.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
