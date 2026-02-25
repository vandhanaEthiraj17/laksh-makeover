
import React from 'react';
import Navigation from '../components/Navigation';
import BookingForm from '../components/BookingForm';

const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      <Navigation />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h1 className="text-5xl font-bold retro-serif mb-4">Book Your Artistry</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Fill in your details below. Our team will verify the availability for your requested date and reach out for final confirmation.</p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
