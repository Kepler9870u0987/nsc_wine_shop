import React, { useEffect } from 'react';
// import Swiper core and required modules
import { Navigation, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import WineCard from './WineCard';

const BestSellerSlider = () => {
    const italianWines = [
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

    useEffect(() => {
        const swiper = document.querySelector('.swiper').swiper;
        if (swiper) {
            const nextButton = document.querySelector('.swiper-button-next');
            const prevButton = document.querySelector('.swiper-button-prev');
            swiper.navigation.init();
            swiper.navigation.update();
            nextButton && prevButton && swiper.navigation.update();
        }
    }, []);

    return (
        <div className="relative multiple-slide-carousel items-center">
            <Swiper
                modules={[Navigation, Scrollbar]}
                spaceBetween={5}
                slidesPerView={3}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 10 }, // Smartphone
                    768: { slidesPerView: 2, spaceBetween: 15 }, // Tablet
                    1024: { slidesPerView: 3, spaceBetween: 20 }, // Laptop/desktop
                }}
            >
                {italianWines.map((wine, index) => (
                    <SwiperSlide className='absolute left-20' key={index}>
                        <WineCard {...wine} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Bottoni di navigazione personalizzati */}
            <div className="swiper-button-next "></div>
            <div className="swiper-button-prev "></div>
        </div>
    );
};

export default BestSellerSlider;
