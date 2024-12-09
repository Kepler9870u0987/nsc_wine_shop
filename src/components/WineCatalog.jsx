import React from 'react';
import WineCard from './WineCard';
import baseImg from '../img/wineCardExample.png';

// Array di dati per 12 vini
const wineCollection = [
    {
        name: "Château Margaux",
        type: "Rosso",
        region: "Bordeaux, Francia",
        vintage: 2015,
        description: "Un vino elegante e complesso, con note di frutti rossi maturi e un finale lungo e sofisticato.",
        imageUrl: baseImg
    },
    {
        name: "Sassicaia",
        type: "Rosso",
        region: "Toscana, Italia",
        vintage: 2018,
        description: "Un Super Tuscan iconico, con intensi profumi di frutta scura e spezie.",
        imageUrl: baseImg
    },
    {
        name: "Opus One",
        type: "Rosso",
        region: "Napa Valley, USA",
        vintage: 2016,
        description: "Un blend bordolese californiano di straordinaria complessità e raffinatezza.",
        imageUrl: baseImg
    },
    {
        name: "Penfolds Grange",
        type: "Rosso",
        region: "South Australia, Australia",
        vintage: 2017,
        description: "Un vino leggendario, simbolo dell'enologia australiana, ricco e potente.",
        imageUrl: baseImg
    },
    {
        name: "Domaine de la Romanée-Conti",
        type: "Rosso",
        region: "Borgogna, Francia",
        vintage: 2016,
        description: "Considerato tra i vini più preziosi al mondo, un Pinot Nero di incredibile finezza.",
        imageUrl: baseImg
    },
    {
        name: "Vega Sicilia Único",
        type: "Rosso",
        region: "Ribera del Duero, Spagna",
        vintage: 2010,
        description: "Un vino spagnolo di culto, simbolo di eleganza e tradizione.",
        imageUrl: baseImg
    },
    {
        name: "Screaming Eagle",
        type: "Rosso",
        region: "Napa Valley, USA",
        vintage: 2015,
        description: "Un Cabernet Sauvignon cult, rarissimo e dal valore straordinario.",
        imageUrl: baseImg
    },
    {
        name: "Château d'Yquem",
        type: "Bianco Dolce",
        region: "Sauternes, Francia",
        vintage: 2011,
        description: "Il più celebre Sauternes, un vino liquoroso di incomparabile complessità.",
        imageUrl: baseImg
    },
    {
        name: "Barolo Monfortino",
        type: "Rosso",
        region: "Piemonte, Italia",
        vintage: 2013,
        description: "Espressione massima del Nebbiolo, un vino di straordinaria eleganza.",
        imageUrl: baseImg
    },
    {
        name: "Krug Clos d'Ambonnay",
        type: "Champagne",
        region: "Champagne, Francia",
        vintage: 2002,
        description: "Uno champagne di lusso, prodotto in quantità estremamente limitate.",
        imageUrl: baseImg
    },
    {
        name: "Château Lafite Rothschild",
        type: "Rosso",
        region: "Bordeaux, Francia",
        vintage: 2019,
        description: "Un Premier Cru Classé di Pauillac, simbolo di eleganza bordolese.",
        imageUrl: baseImg
    },
    {
        name: "Hermitage La Chapelle",
        type: "Rosso",
        region: "Rhône, Francia",
        vintage: 2016,
        description: "Un Syrah leggendario, espressione massima della Valle del Rodano.",
        imageUrl: baseImg
    }
];

// Componente per la collezione di vini
function WineCatalog() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Collezione di Vini Pregiati
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {wineCollection.map((wine, index) => (
                    <WineCard
                        key={index}
                        name={wine.name}
                        type={wine.type}
                        region={wine.region}
                        vintage={wine.vintage}
                        description={wine.description}
                        imageUrl={wine.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default WineCatalog;