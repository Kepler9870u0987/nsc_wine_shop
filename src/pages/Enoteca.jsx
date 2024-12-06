import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WineCatalog from '../components/WineCatalog';

function Enoteca() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Contenuto Principale */}
            <main className="flex-grow container mx-auto px-4 py-8 pt-20">

                <WineCatalog />

            </main>

            {/* Footer */}
            {/*<Footer />*/}
        </div>
    );
}

export default Enoteca;
