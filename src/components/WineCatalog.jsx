import React from 'react';
import WineCard from './WineCard';


// Array di dati per 12 vini
const wineCollection = [
    { nomeVino: "Chianti Classico", regione: "Toscana", prezzo: "12.50", cantina: "Antinori", imageUrl: "https://via.placeholder.com/150?text=Chianti+Classico" },
    { nomeVino: "Barolo", regione: "Piemonte", prezzo: "45.00", cantina: "Gaja", imageUrl: "https://via.placeholder.com/150?text=Barolo" },
    { nomeVino: "Amarone", regione: "Veneto", prezzo: "50.00", cantina: "Allegrini", imageUrl: "https://via.placeholder.com/150?text=Amarone" },
    { nomeVino: "Brunello di Montalcino", regione: "Toscana", prezzo: "60.00", cantina: "Biondi-Santi", imageUrl: "https://via.placeholder.com/150?text=Brunello+di+Montalcino" },
    { nomeVino: "Prosecco", regione: "Veneto", prezzo: "15.00", cantina: "Valdo", imageUrl: "https://via.placeholder.com/150?text=Prosecco" },
    { nomeVino: "Montepulciano d'Abruzzo", regione: "Abruzzo", prezzo: "10.00", cantina: "Masciarelli", imageUrl: "https://via.placeholder.com/150?text=Montepulciano+d'Abruzzo" },
    { nomeVino: "Franciacorta", regione: "Lombardia", prezzo: "30.00", cantina: "Ca' del Bosco", imageUrl: "https://via.placeholder.com/150?text=Franciacorta" },
    { nomeVino: "Lambrusco", regione: "Emilia-Romagna", prezzo: "8.00", cantina: "Cavicchioli", imageUrl: "https://via.placeholder.com/150?text=Lambrusco" },
    { nomeVino: "Vernaccia di San Gimignano", regione: "Toscana", prezzo: "13.00", cantina: "Panizzi", imageUrl: "https://via.placeholder.com/150?text=Vernaccia+di+San+Gimignano" },
    { nomeVino: "Etna Rosso", regione: "Sicilia", prezzo: "25.00", cantina: "Benanti", imageUrl: "https://via.placeholder.com/150?text=Etna+Rosso" },
    { nomeVino: "Aglianico del Vulture", regione: "Basilicata", prezzo: "18.00", cantina: "Elena Fucci", imageUrl: "https://via.placeholder.com/150?text=Aglianico+del+Vulture" },
    { nomeVino: "Cannonau", regione: "Sardegna", prezzo: "20.00", cantina: "Sella & Mosca", imageUrl: "https://via.placeholder.com/150?text=Cannonau" },
    { nomeVino: "Nero d'Avola", regione: "Sicilia", prezzo: "9.00", cantina: "Donnafugata", imageUrl: "https://via.placeholder.com/150?text=Nero+d'Avola" },
    { nomeVino: "Valpolicella Ripasso", regione: "Veneto", prezzo: "22.00", cantina: "Tommasi", imageUrl: "https://via.placeholder.com/150?text=Valpolicella+Ripasso" },
    { nomeVino: "Orvieto", regione: "Umbria", prezzo: "11.00", cantina: "Antinori", imageUrl: "https://via.placeholder.com/150?text=Orvieto" },
];


// Componente per la collezione di vini
function WineCatalog() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                Catalogo
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {wineCollection.map((wine, index) => (
                    <WineCard
                        key={index}
                        nomeVino={wine.nomeVino}
                        cantina={wine.cantina}
                        regione={wine.regione}
                        prezzo={wine.prezzo}
                        imageUrl={wine.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default WineCatalog;