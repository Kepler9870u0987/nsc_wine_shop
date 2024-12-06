import React from 'react';

const ListaServizi = () => {
    const specifiche = [
        {
            titolo: 'Servizio 1',
            descrizione: 'Designed by Good Goods, Inc.',
            immagine: '/api/placeholder/300/200?text=Origin'
        },
        {
            titolo: 'Servizio 2',
            descrizione: 'Solid walnut base with rare earth magnets and powder coated steel card cover',
            immagine: '/api/placeholder/300/200?text=Material'
        },
        {
            titolo: 'Servizio 3',
            descrizione: '6.25" x 3.55" x 1.15"',
            immagine: '/api/placeholder/300/200?text=Dimensions'
        }
    ];

    return (
        <div className="w-full h-[calc(100vh-200px)] bg-white overflow-auto px-8 pt-[100px] pb-[25px]">
            <div className="space-y-12">
                {specifiche.map((specifica, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-gray-200 pt-8 first:border-none"
                    >
                        <img
                            src={specifica.immagine}
                            alt={`Placeholder for ${specifica.titolo}`}
                            className="w-full rounded-xl bg-gray-100"
                        />
                        <div>
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