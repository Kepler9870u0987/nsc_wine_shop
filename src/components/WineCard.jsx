import React from 'react';

function WineCard({
    name,
    type,
    region,
    vintage,
    imageUrl = '../img/wineCardExample.png',
    description
}) {
    return (
        <div className="bg-gray-300 rounded-lg shadow-md overflow-hidden max-w-4xl w-full flex h-96">
            {/* Immagine a sinistra */}
            <div className="w-1/2 relative">
                <img
                    src={imageUrl}
                    alt={`${name} wine bottle`}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                />
            </div>

            {/* Sezione Informazioni a destra */}
            <div className="w-1/2 bg-white p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
                <div className="text-gray-600 space-y-2">
                    <p className="text-sm">{type}</p>
                    <p className="text-sm">{region}</p>
                    <p className="text-sm">Vintage: {vintage}</p>

                    {description && (
                        <p className="text-xs text-gray-700 mt-2 italic">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

// Esempio di utilizzo del componente
export function WineCardExample() {
    return (
        <WineCard
            name="Château Margaux"
            type="Rosso"
            region="Bordeaux, Francia"
            vintage={2015}
            description="Un vino elegante e complesso, con note di frutti rossi maturi e un finale lungo e sofisticato."
        />
    );
}

export default WineCard;