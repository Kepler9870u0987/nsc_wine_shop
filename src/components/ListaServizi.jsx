import React from 'react';
import Servizio1 from '../img/servizio1.webp';
import Servizio2 from '../img/servizio2.webp';
import Servizio3 from '../img/servizio3.webp';

const ListaServizi = () => {
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

    return (
        <div className="w-full h-[calc(100vh-200px)] bg-white overflow-auto">
            <div className="space-y-8">
                {specifiche.map((specifica, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 lg:grid-cols-2 items-center border-t border-gray-200 first:border-none"
                    >
                        <img
                            src={specifica.immagine}
                            alt={`Placeholder for ${specifica.titolo}`}
                            className="w-[300px] h-[200px] object-cover bg-gray-100 rounded-lg self-center"
                        />
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                                {specifica.titolo}
                            </h2>
                            <dd className="text-sm text-gray-500">
                                {specifica.descrizione}
                            </dd>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaServizi;