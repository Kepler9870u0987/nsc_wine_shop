import React from 'react';
import WineCatalog from '../components/WineCatalog';
import BestSellerSlider from '../components/BestSellerSlider';
import Banner from '../components/Banner';
import StickyContactForm from '../components/StickyContactForm';
import ContactForm from '../components/ContactForm';


function Enoteca() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar placeholder - da sostituire con il tuo componente Navbar */}
            <nav className="h-16 bg-gray-100">
                {/* Navbar content */}
            </nav>

            <main className="flex-grow container mx-auto py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">I nostri vini migliori</h1>
                </div>
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <BestSellerSlider />
                </div>

                <div class="border-t border-gray-300 w-2/3 mx-auto mt-12 mb-12"></div>

                {/*Banner NSC */}
                <div className='pb-12'>
                    <Banner />
                </div>

                <div className="flex flex-col justify-center items-center h-full mb-12">
                    <h1 className="text-4xl my-6 font-bold text-gray-800 mb-4">I nostri vini</h1>
                    <p className="text-xl text-gray-500">Scopri tutti i vini che abbiamo preparato per te</p>
                </div>

                <div className="flex max-lg:flex-col pt-16">
                    <div className="w-2/3 overflow-y-auto">
                        <WineCatalog />
                    </div>

                    <div className="border-r border-gray-300 mx-8 my-8"></div>

                    <div className="w-1/3">
                        <div id="contact-form-wrapper" className="sticky top-16">
                            <ContactForm />
                        </div>
                    </div>
                </div>

            </main>


        </div>
    );
};

export default Enoteca;
