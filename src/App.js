import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div />
          <Card />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Qui il tuo contenuto principale */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;