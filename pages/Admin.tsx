
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { formatCurrency } from '../utils';

const AdminPage: React.FC = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('laksh_bookings') || '[]');
    setBookings(data);
  }, []);

  const deleteBooking = (id: string) => {
    if (confirm("Are you sure you want to delete this record?")) {
      const updated = bookings.filter(b => b.id !== id);
      setBookings(updated);
      localStorage.setItem('laksh_bookings', JSON.stringify(updated));
    }
  };

  const totalRevenue = bookings.reduce((acc, curr) => acc + curr.totalAmount, 0);
  const totalAdvances = bookings.reduce((acc, curr) => acc + curr.advancePaid, 0);
  const totalPending = totalRevenue - totalAdvances;

  return (
    <div className="min-h-screen bg-[#f8f1e9]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold retro-serif mb-2 uppercase tracking-tighter">Artistry Dashboard</h1>
            <p className="text-gray-500">Manage your bridal appointments and financial records.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white border border-[#2d2d2d] p-4 text-center">
              <p className="text-[9px] uppercase font-bold tracking-widest text-gray-400 mb-1">Projected Revenue</p>
              <p className="text-xl font-bold">{formatCurrency(totalRevenue)}</p>
            </div>
            <div className="bg-[#2d2d2d] text-white p-4 text-center">
              <p className="text-[9px] uppercase font-bold tracking-widest text-gray-200 mb-1">Balance Due</p>
              <p className="text-xl font-bold">{formatCurrency(totalPending)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-[#2d2d2d] overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b-2 border-[#2d2d2d]">
              <tr className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                <th className="px-6 py-4">Ref / Client</th>
                <th className="px-6 py-4">Function Date</th>
                <th className="px-6 py-4">Package</th>
                <th className="px-6 py-4 text-right">Total</th>
                <th className="px-6 py-4 text-right">Paid</th>
                <th className="px-6 py-4 text-right">Balance</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-400 italic">No bookings found in system.</td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking.id} className="text-sm hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-bold uppercase tracking-tighter text-xs">{booking.id}</div>
                      <div className="text-gray-600">{booking.name}</div>
                    </td>
                    <td className="px-6 py-4 font-mono text-xs">{booking.date}</td>
                    <td className="px-6 py-4 max-w-[150px] truncate">{booking.packageId}</td>
                    <td className="px-6 py-4 text-right font-medium">{formatCurrency(booking.totalAmount)}</td>
                    <td className="px-6 py-4 text-right text-green-700 font-bold">{formatCurrency(booking.advancePaid)}</td>
                    <td className="px-6 py-4 text-right text-red-800 font-black">{formatCurrency(booking.balanceDue)}</td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">{booking.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => deleteBooking(booking.id)}
                        className="text-red-800 hover:text-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 border-2 border-red-800 p-6">
            <h3 className="text-lg font-bold retro-serif uppercase tracking-widest text-red-800 mb-4 border-b border-red-200 pb-2">Admin Notes</h3>
            <ul className="text-xs space-y-3 text-red-900 list-disc pl-4 italic">
              <li>Automatic SMS reminders are triggered 48 hours before the function date.</li>
              <li>Always check for "Drama Continuity Charts" for theater bookings.</li>
              <li>Flower arrangements must be sourced from certified vendors 24h prior.</li>
            </ul>
          </div>
          <div className="bg-white border-2 border-[#2d2d2d] p-6">
            <h3 className="text-lg font-bold retro-serif uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">Quick Reports</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-[#2d2d2d] text-white py-3 uppercase text-[10px] font-bold tracking-widest hover:bg-black">Generate Monthly Invoice</button>
              <button className="border border-[#2d2d2d] py-3 uppercase text-[10px] font-bold tracking-widest hover:bg-[#2d2d2d] hover:text-white">Export Client List (CSV)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
