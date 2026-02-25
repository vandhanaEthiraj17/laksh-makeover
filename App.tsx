
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import BookingPage from './pages/Booking';
import AdminPage from './pages/Admin';
import PolaroidGallery from './components/PolaroidGallery';
import Navigation from './components/Navigation';

const LookbookPage = () => (
  <div className="min-h-screen pb-20 bg-white">
    <Navigation />
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-6xl font-bold retro-serif mb-4 text-center">Artistry Portfolio</h1>
      <p className="text-gray-500 mb-20 text-center max-w-2xl mx-auto italic font-light">"Capturing the grain, the light, and the timeless essence of beauty."</p>
      <PolaroidGallery />
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    // Basic Hash Router implementation
    if (currentPath === '#/' || currentPath === '') {
      return <Home />;
    }
    if (currentPath.startsWith('#/booking')) {
      return <BookingPage />;
    }
    if (currentPath === '#/lookbook') {
      return <LookbookPage />;
    }
    if (currentPath === '#/admin') {
      return <AdminPage />;
    }
    if (currentPath === '#/services') {
      return <Home />; // Services is an anchor on Home for this demo
    }
    return <Home />;
  };

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
};

export default App;
