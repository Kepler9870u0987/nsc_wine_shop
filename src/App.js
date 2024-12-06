import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import Eventi from './pages/Eventi';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="flex-1 relative">
              <div className="absolute inset-0 overflow-hidden">
                <Card />
              </div>
              <div className="relative z-10 container mx-auto px-4 py-16">
                {/* Qui il tuo contenuto principale */}
              </div>
            </div>
          }
        />
        {/* Altra Pagina */}
        <Route path="/eventi" element={<Eventi />} />
      </Routes>
      {/* Footer visibile in tutte le pagine */}
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
