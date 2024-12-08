import React from 'react';
import Servizio1 from '../img/servizio1.webp';
import Servizio2 from '../img/servizio2.webp';
import Servizio3 from '../img/servizio3.webp';

const specifiche = [
    {
        titolo: 'Servizio 1',
        descrizione: 'Designed by Good Goods, Inc.',
        immagine: Servizio1
    },
    {
        titolo: 'Servizio 2',
        descrizione: 'Solid walnut base with rare earth magnets and powder coated steel card cover',
        immagine: Servizio2
    },
    {
        titolo: 'Servizio 3',
        descrizione: '6.25" x 3.55" x 1.15"',
        immagine: Servizio3
    }
];

const ListaServizi = () => {
    return (
        <div className="h-full w-full flex justify-center pt-6">
            <div className="h-full w-full max-w-2xl space-y-6 overflow-y-auto">
                {specifiche.map((servizio, index) => (
                    <div
                        key={index}
                        className="relative flex items-start w-full pb-6 last:pb-0"
                    >
                        <div className="w-7/12 pr-4">
                            <img
                                src={servizio.immagine}
                                alt={servizio.titolo}
                                className="rounded-lg w-full h-48 object-cover shadow-lg"
                            />
                        </div>
                        <div className="w-5/12">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {servizio.titolo}
                            </h3>
                            <p className="text-base text-gray-600">
                                {servizio.descrizione}
                            </p>
                        </div>
                        {index < specifiche.length - 1 && (
                            <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaServizi;