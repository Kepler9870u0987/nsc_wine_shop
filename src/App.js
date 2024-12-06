import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import Eventi from './pages/Eventi';
import Servizi from './pages/Servizi';  // Aggiunto import Servizi

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
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
        <Route path="/eventi" element={<Eventi />} />
        <Route path="/servizi" element={<Servizi />} />  {/* Aggiunta rotta Servizi */}
      </Routes>
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