import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Servizi() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Contenuto Principale con altezza dinamica */}
            <div className="flex-1" style={{ height: 'calc(100vh - 64px - 296px)' }}>
                {/* Qui va il contenuto principale */}
                <div className="container mx-auto px-4 py-16">
                    {/* Contenuto della pagina */}
                    <h1>Benvenuto nella pagina dei Servizi</h1>
                    {/* Altri contenuti */}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Servizi;
