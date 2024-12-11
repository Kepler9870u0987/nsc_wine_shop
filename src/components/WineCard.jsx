import React from 'react';
import baseImg from '../img/wineCardExample.png';

const WineCard = ({ nomeVino, regione, prezzo, cantina, imageUrl }) => {
    return (
        <div className="flex items-center justify-center bg-gray-200 relative rounded-[16px] shadow-lg h-80 w-56 border border-gray-400">
            {/* Ombra */}
            <img
                src="/img/wineShadow.webp"
                alt={`${nomeVino} shadow`}
                className="absolute w-28 h-60 left-6 blur-md z-0"
            />

            {/* Immagine */}
            <img
                src={baseImg}
                alt={nomeVino}
                className="absolute w-28 h-60 object-cover left-0 z-1"
            />

            {/* Testo posizionato in alto a destra */}
            <div className="absolute top-0 right-2 px-2 py-1 text-right">
                <p className="text-xl font-bold text-gray-800 font-elegant">{nomeVino}</p>
                <p className="text-base text-gray-600">{regione}</p>
            </div>

            {/* Prezzo sopra la cantina */}
            <p className="absolute bottom-14 right-2 px-2 py-1 border-2 border-spacing-1 border-gray-600 rounded-md text-lg font-bold text-gray-900 justify-center text-center">{prezzo} €</p>

            {/* Nome della cantina in basso */}
            <div className="absolute bottom-2 left-2 right-2 bg-white px-2 py-1 rounded-full border-2 border-gray-300 text-center">
                <p className="text-sm font-semibold text-gray-700">{cantina}</p>
            </div>
        </div>
    );
};

export default WineCard;
