import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListaServizi from '../components/ListaServizi';
import ContactForm from '../components/ContactForm';

function Servizi() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex flex-1">
                <div className="w-1/2 bg-gray-100 flex items-center justify-center overflow-auto">
                    <ListaServizi />
                </div>

                <div className="w-px bg-gray-300 my-4"></div>

                <div className="w-1/2 bg-gray-100 flex items-center justify-center overflow-auto">
                    <ContactForm />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Servizi;