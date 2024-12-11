import React from 'react';

const WineCard = ({
    imageUrl = "https://storage.googleapis.com/qoup-prod-app-image-api-kx8-prod-menu-images/DATI/products/resized/3266/1727084527.png"
}) => {
    return (
        <div className="flex items-center justify-center bg-gray-200 relative rounded-[16px] shadow-lg h-80 w-56 border border-gray-400">


            {/* Ombra */}
            <img
                src='/img/wineShadow.webp'
                alt="Wine Card Example"
                className="absolute w-28 h-60 left-6 blur-md z-0"
            />


            {/* Immagine */}
            <img
                src="https://storage.googleapis.com/qoup-prod-app-image-api-kx8-prod-menu-images/DATI/products/resized/3266/1727084527.png"
                alt="Wine Card Example"
                className="absolute w-28 h-60 object-cover left-0 z-1"
            />

            {/* Testo posizionato in alto a destra */}
            <div className="absolute top-0 right-2 px-2 py-1 text-right">
                <p className="text-xl font-bold text-gray-800 font-elegant">
                    Nome vino
                </p>
                <p className="text-base text-gray-600">
                    Regione
                </p>
            </div>

            {/* Nome della cantina in basso */}
            <div className="absolute bottom-2 left-2 right-2 bg-white px-2 py-1 rounded-full text-center">
                <p className="text-sm font-semibold text-gray-700">
                    Cantina
                </p>
            </div>
        </div>


    );
};

export default WineCard;