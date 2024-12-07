import React from 'react';
import ContactForm from '../components/ContactForm';
import ListaServizi from '../components/ListaServizi';

const Servizi = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar placeholder - da sostituire con il tuo componente Navbar */}
            <nav className="h-16 bg-gray-100">
                {/* Navbar content */}
            </nav>

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">I nostri servizi</h1>
                    <p className="text-xl text-gray-600">Scopri tutti i servizi che abbiamo preparato per te</p>
                </div>

                <div className="flex">
                    <div className="w-1/2 pr-8 overflow-y-auto">
                        <ListaServizi />
                    </div>

                    <div className="border-r border-gray-300 mx-8"></div>

                    <div className="w-1/2 pl-8 overflow-y-auto">
                        <ContactForm />
                    </div>
                </div>
            </main>


        </div>
    );
};

export default Servizi;